package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

const TotalAttempts = 10

type LoginCredentials struct {
	Cif      string `json:"cif"`
	Password string `json:"password"`
}

type LoginResponse struct {
	Timestamp string   `json:"timestamp"`
	Status    string   `json:"status"`
	Message   string   `json:"message"`
	Errors    []string `json:"errors"`
}

type AttemptResult struct {
	AttemptNumber int
	StatusCode    int
	Timestamp     string
	Status        string
	Message       string
	Errors        []string
	IsSuccess     bool
}

func generateReport(results []AttemptResult) {
	fmt.Println("\n=== Login Test Report ===")
	fmt.Printf("Total Attempts: %d\n", len(results))

	successCount := 0
	rateLimitCount := 0
	invalidCredsCount := 0

	for _, result := range results {
		if result.IsSuccess {
			successCount++
		}
		if result.StatusCode == 429 {
			rateLimitCount++
		}
		if result.StatusCode == 500 && len(result.Errors) > 0 && result.Errors[0] == "اطلاعات وارد شده صحیح نمی باشد." {
			invalidCredsCount++
		}
	}

	fmt.Printf("Successful Logins: %d\n", successCount)
	fmt.Printf("Rate Limit Errors (429): %d\n", rateLimitCount)
	fmt.Printf("Invalid Credentials Errors: %d\n", invalidCredsCount)
	fmt.Printf("Other Errors: %d\n", len(results)-successCount-rateLimitCount-invalidCredsCount)

	fmt.Println("\nDetailed Results:")
	for _, result := range results {
		fmt.Printf("Attempt %d: Status Code = %d, Timestamp = %s, Status = %s, Message = %s, Errors = %v, Success = %v\n",
			result.AttemptNumber, result.StatusCode, result.Timestamp, result.Status, result.Message, result.Errors, result.IsSuccess)
	}
	fmt.Println("========================")
}

func main() {
	url := "https://admin-club.farazpardazan.com/auth/admin-login"

	wrongCredentials := LoginCredentials{
		Cif:      "mhoarb",
		Password: "admin1234!@Wrongpass",
	}

	correctCredentials := LoginCredentials{
		Cif:      "mhoarb",
		Password: "admin1234!@",
	}

	client := &http.Client{
		Timeout: 10 * time.Second,
	}

	var results []AttemptResult

	sendLoginRequest := func(credentials LoginCredentials, attempt int) {
		jsonData, err := json.Marshal(credentials)
		if err != nil {
			fmt.Printf("Attempt %d: Error marshaling JSON: %v\n", attempt, err)
			results = append(results, AttemptResult{
				AttemptNumber: attempt,
				StatusCode:    0,
				Message:       fmt.Sprintf("Error marshaling JSON: %v", err),
			})
			return
		}

		req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
		if err != nil {
			fmt.Printf("Attempt %d: Error creating request: %v\n", attempt, err)
			results = append(results, AttemptResult{
				AttemptNumber: attempt,
				StatusCode:    0,
				Message:       fmt.Sprintf("Error creating request: %v", err),
			})
			return
		}
		req.Header.Set("Content-Type", "application/json")

		resp, err := client.Do(req)
		if err != nil {
			fmt.Printf("Attempt %d: Error sending request: %v\n", attempt, err)
			results = append(results, AttemptResult{
				AttemptNumber: attempt,
				StatusCode:    0,
				Message:       fmt.Sprintf("Error sending request: %v", err),
			})
			return
		}
		defer resp.Body.Close()

		var responseBody LoginResponse
		if err := json.NewDecoder(resp.Body).Decode(&responseBody); err != nil {
			fmt.Printf("Attempt %d: Error decoding response: %v\n", attempt, err)
			results = append(results, AttemptResult{
				AttemptNumber: attempt,
				StatusCode:    resp.StatusCode,
				Message:       fmt.Sprintf("Error decoding response: %v", err),
			})
			return
		}

		isSuccess := resp.StatusCode == 200

		results = append(results, AttemptResult{
			AttemptNumber: attempt,
			StatusCode:    resp.StatusCode,
			Timestamp:     responseBody.Timestamp,
			Status:        responseBody.Status,
			Message:       responseBody.Message,
			Errors:        responseBody.Errors,
			IsSuccess:     isSuccess,
		})

		fmt.Printf("Attempt %d: Status Code = %d\n", attempt, resp.StatusCode)
		fmt.Printf("Response: Timestamp = %s, Status = %s, Message = %s, Errors = %v\n",
			responseBody.Timestamp, responseBody.Status, responseBody.Message, responseBody.Errors)

		if resp.StatusCode == 429 {
			fmt.Println("Rate limit reached!")
		} else if resp.StatusCode == 500 && len(responseBody.Errors) > 0 &&
			responseBody.Errors[0] == "اطلاعات وارد شده صحیح نمی باشد." {
			fmt.Println("Invalid credentials detected.")
		}
	}

	for i := 1; i < TotalAttempts; i++ {
		fmt.Printf("\nSending request %d with wrong credentials...\n", i)
		sendLoginRequest(wrongCredentials, i)
		time.Sleep(1 * time.Second) // وقفه 1 ثانیه‌ای بین درخواست‌ها
	}

	fmt.Printf("\nSending request %d with correct credentials...\n", TotalAttempts)
	sendLoginRequest(correctCredentials, TotalAttempts)

	generateReport(results)

	fmt.Println("Test completed.")
}
