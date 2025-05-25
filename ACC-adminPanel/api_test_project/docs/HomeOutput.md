# HomeOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banners** | [**List[BannerOutput]**](BannerOutput.md) |  | [optional] 
**user_home** | [**UserHomeOutput**](UserHomeOutput.md) |  | [optional] 
**total_score** | **int** |  | [optional] 
**total_loan_score** | **int** |  | [optional] 
**total_lottery_score** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.home_output import HomeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of HomeOutput from a JSON string
home_output_instance = HomeOutput.from_json(json)
# print the JSON string representation of the object
print(HomeOutput.to_json())

# convert the object into a dict
home_output_dict = home_output_instance.to_dict()
# create an instance of HomeOutput from a dict
home_output_from_dict = HomeOutput.from_dict(home_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


