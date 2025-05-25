
describe('Complete API Tests for Club Customer Swagger Endpoints', () => {
    const baseUrl = Cypress.env('API_URL') || 'https://ccd.farazpardazan.com';
  
    const authToken = Cypress.env('token') || 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBlcmFkbWluIiwicm9sZXMiOlsiU1VQRVJfQURNSU4iXSwiaWF0IjoxNzQ2MTAxMDg4LCJleHAiOjE3NDYxMjk4ODh9.gCmpkjemi-I3spL1HKWaF_xXV9tidSa9Cotmxlwm4Uw';
  
    // Common headers for all requests
    const headers = {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    };
  
    // Helper function to validate response schema (basic)
    const validateResponse = (response, expectedSchema = {}, expectBoolean = false) => {
      console.log('Response Body:', JSON.stringify(response.body, null, 2));
      expect(response.status).to.eq(200);
      if (expectBoolean) {
        expect(response.body).to.be.a('boolean');
      } else {
        expect(response.body).to.be.an('object');
        Object.keys(expectedSchema).forEach((key) => {
          expect(response.body).to.have.property(key);
        });
      }
    };
  
    // Helper function to test unauthorized access
    const testUnauthorized = (method, endpoint) => {
      it(`should return 401 for ${method} with invalid token`, () => {
        cy.request({
          method,
          url: `${baseUrl}${endpoint}`,
          headers: {
            Authorization: 'Bearer invalid-token',
            'Content-Type': 'application/json',
          },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(401);
        });
      });
    };
  
    // 1. Tests for /rules-engine/score-types/{id}
    describe('Rules Engine: Score Types API', () => {
      const endpoint = '/rules-engine/score-types/1';
  
      it('GET - should retrieve score type by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update score type', () => {
        const requestBody = {
          name: 'Updated Score Type',
          description: 'Updated description',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete score type', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, {}, true);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 2. Tests for /rules-engine/rule-configs/{id}
    describe('Rules Engine: Rule Configs API', () => {
      const endpoint = '/rules-engine/rule-configs/1';
  
      it('GET - should retrieve rule config by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update rule config', () => {
        const requestBody = {
          configName: 'Updated Config',
          rules: [],
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete rule config', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, {}, true);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 3. Tests for /member/profile/details
    describe('Member Profile API', () => {
      const endpoint = '/member/profile/details';
  
      it('GET - should retrieve profile details', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number', name: 'string' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update profile details', () => {
        const requestBody = {
          name: 'John',
          surname: 'Doe',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number', name: 'string' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
    });
  
    // 4. Tests for /admin/voting/{id}
    describe('Admin Voting API', () => {
      const endpoint = '/admin/voting/1';
  
      it('GET - should retrieve voting by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update voting state', () => {
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}?isActive=true`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete voting', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 5. Tests for /admin/version-note/{id}
    describe('Admin Version Note API', () => {
      const endpoint = '/admin/version-note/1';
  
      it('GET - should retrieve version note by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update version note', () => {
        const requestBody = {
          note: 'Updated version note',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete version note', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 6. Tests for /admin/user-settings/{id}/change-password
    describe('Admin User Settings: Change Password API', () => {
      const endpoint = '/admin/user-settings/1/change-password';
  
      it('PUT - should change user password', () => {
        const requestBody = {
          newPassword: 'newPassword123',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('PUT', endpoint);
    });
  
    // 7. Tests for /admin/user-settings/{id}/change-info
    describe('Admin User Settings: Change Info API', () => {
      const endpoint = '/admin/user-settings/1/change-info';
  
      it('PUT - should change user info', () => {
        const requestBody = {
          name: 'Jane',
          surname: 'Doe',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('PUT', endpoint);
    });
  
    // 8. Tests for /admin/spend-score-bank-article/{id}
    describe('Admin Spend Score Bank Article API', () => {
      const endpoint = '/admin/spend-score-bank-article/1';
  
      it('GET - should retrieve spend score bank article by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update spend score bank article', () => {
        const requestBody = {
          title: 'Updated Article',
          content: 'Updated content',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete spend score bank article', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 9. Tests for /admin/rule/offline/{id}
    describe('Admin Offline Rule Engine API', () => {
      const endpoint = '/admin/rule/offline/1';
  
      it('GET - should retrieve offline rule by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update offline rule', () => {
        const requestBody = {
          rule: 'Updated rule',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
    });
  
    // 10. Tests for /admin/profile/favorite/questions/{id}
    describe('Admin Profile Favorite Questions API', () => {
      const endpoint = '/admin/profile/favorite/questions/1';
  
      it('GET - should retrieve question by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update question', () => {
        const requestBody = {
          question: 'Updated question',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete question', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 11. Tests for /admin/profile/communication
    describe('Admin Profile Communication API', () => {
      const endpoint = '/admin/profile/communication';
  
      it('GET - should retrieve communication details', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, {});
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update communication details', () => {
        const requestBody = {
          email: 'updated@example.com',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, {});
        });
      });
  
      testUnauthorized('PUT', endpoint);
    });
  
    // 12. Tests for /admin/profile/about-us/faq/{id}
    describe('Admin Profile FAQ API', () => {
      const endpoint = '/admin/profile/about-us/faq/1';
  
      it('GET - should retrieve FAQ by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update FAQ', () => {
        const requestBody = {
          question: 'Updated FAQ question',
          answer: 'Updated answer',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete FAQ', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 13. Tests for /admin/prize/{id}
    describe('Admin Prize API', () => {
      const endpoint = '/admin/prize/1';
  
      it('GET - should retrieve prize by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update prize', () => {
        const requestBody = {
          title: 'Updated Prize',
          description: 'Updated description',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('POST - should add winner to prize', () => {
        cy.request({
          method: 'POST',
          url: `${baseUrl}${endpoint}?customerId=12345`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('POST', endpoint);
  
      it('DELETE - should delete prize', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 14. Tests for /admin/other-lottery/{id}
    describe('Admin Other Lottery API', () => {
      const endpoint = '/admin/other-lottery/1';
  
      it('GET - should retrieve lottery by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update lottery', () => {
        const requestBody = {
          title: 'Updated Lottery',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete lottery', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 15. Tests for /admin/online-center/{id}
    describe('Admin Online Center API', () => {
      const endpoint = '/admin/online-center/1';
  
      it('GET - should retrieve online center by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update online center', () => {
        const requestBody = {
          title: 'Updated Online Center',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete online center', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 16. Tests for /admin/online-center-category/{id}
    describe('Admin Online Center Category API', () => {
      const endpoint = '/admin/online-center-category/1';
  
      it('GET - should retrieve online center category by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update online center category', () => {
        const requestBody = {
          name: 'Updated Category',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete online center category', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 17. Tests for /admin/missions/{id}
    describe('Admin Missions API', () => {
      const endpoint = '/admin/missions/1';
  
      it('GET - should retrieve mission by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update mission', () => {
        const requestBody = {
          title: 'Updated Mission',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete mission', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 18. Tests for /admin/lottery/{id}
    describe('Admin Lottery API', () => {
      const endpoint = '/admin/lottery/1';
  
      it('GET - should retrieve lottery by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update lottery', () => {
        const requestBody = {
          title: 'Updated Lottery',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete lottery', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 19. Tests for /admin/iran-mall-shop/{id}
    describe('Admin Iran Mall Shop API', () => {
      const endpoint = '/admin/iran-mall-shop/1';
  
      it('GET - should retrieve Iran Mall shop by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update Iran Mall shop', () => {
        const requestBody = {
          name: 'Updated Shop',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete Iran Mall shop', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 20. Tests for /admin/iran-mall-shop-category/{id}
    describe('Admin Iran Mall Shop Category API', () => {
      const endpoint = '/admin/iran-mall-shop-category/1';
  
      it('GET - should retrieve Iran Mall shop category by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update Iran Mall shop category', () => {
        const requestBody = {
          name: 'Updated Category',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete Iran Mall shop category', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 21. Tests for /admin/iran-mall-conference-hall/{id}
    describe('Admin Iran Mall Conference Hall API', () => {
      const endpoint = '/admin/iran-mall-conference-hall/1';
  
      it('GET - should retrieve Iran Mall conference hall by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update Iran Mall conference hall', () => {
        const requestBody = {
          name: 'Updated Conference Hall',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete Iran Mall conference hall', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 22. Tests for /admin/iran-mall-cinema/{id}
    describe('Admin Iran Mall Cinema API', () => {
      const endpoint = '/admin/iran-mall-cinema/1';
  
      it('GET - should retrieve Iran Mall cinema by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update Iran Mall cinema', () => {
        const requestBody = {
          title: 'Updated Cinema',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete Iran Mall cinema', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 23. Tests for /admin/iran-cards/{id}
    describe('Admin Iran Cards API', () => {
      const endpoint = '/admin/iran-cards/1';
  
      it('GET - should retrieve Iran card by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update Iran card', () => {
        const requestBody = {
          cardNo: '123456789',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
    });
  
    // 24. Tests for /admin/iran-card-feature/{id}
    describe('Admin Iran Card Feature API', () => {
      const endpoint = '/admin/iran-card-feature/1';
  
      it('GET - should retrieve Iran card feature by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update Iran card feature', () => {
        const requestBody = {
          feature: 'Updated Feature',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete Iran card feature', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 25. Tests for /admin/iran-card-category/{id}
    describe('Admin Iran Card Category API', () => {
      const endpoint = '/admin/iran-card-category/1';
  
      it('GET - should retrieve Iran card category by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update Iran card category', () => {
        const requestBody = {
          name: 'Updated Category',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete Iran card category', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 26. Tests for /admin/internal-online-center/{id}
    describe('Admin Internal Online Center API', () => {
      const endpoint = '/admin/internal-online-center/1';
  
      it('GET - should retrieve internal online center by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update internal online center', () => {
        const requestBody = {
          title: 'Updated Internal Online Center',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete internal online center', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 27. Tests for /admin/insurance/{id}
    describe('Admin Insurance API', () => {
      const endpoint = '/admin/insurance/1';
  
      it('GET - should retrieve insurance by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update insurance', () => {
        const requestBody = {
          title: 'Updated Insurance',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete insurance', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  
    // 28. Tests for /admin/insurance-category/{id}
    describe('Admin Insurance Category API', () => {
      const endpoint = '/admin/insurance-category/1';
  
      it('GET - should retrieve insurance category by ID', () => {
        cy.request({
          method: 'GET',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('GET', endpoint);
  
      it('PUT - should update insurance category', () => {
        const requestBody = {
          name: 'Updated Insurance Category',
        };
  
        cy.request({
          method: 'PUT',
          url: `${baseUrl}${endpoint}`,
          headers,
          body: requestBody,
          failOnStatusCode: false,
        }).then((response) => {
          validateResponse(response, { id: 'number' });
        });
      });
  
      testUnauthorized('PUT', endpoint);
  
      it('DELETE - should delete insurance category', () => {
        cy.request({
          method: 'DELETE',
          url: `${baseUrl}${endpoint}`,
          headers,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
  
      testUnauthorized('DELETE', endpoint);
    });
  });