# OnlineCenterCategoryHomeOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lottery_banners** | [**List[BannerOutput]**](BannerOutput.md) |  | [optional] 
**online_center_categories** | [**List[OnlineCenterCategoryOutput]**](OnlineCenterCategoryOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.online_center_category_home_output import OnlineCenterCategoryHomeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of OnlineCenterCategoryHomeOutput from a JSON string
online_center_category_home_output_instance = OnlineCenterCategoryHomeOutput.from_json(json)
# print the JSON string representation of the object
print(OnlineCenterCategoryHomeOutput.to_json())

# convert the object into a dict
online_center_category_home_output_dict = online_center_category_home_output_instance.to_dict()
# create an instance of OnlineCenterCategoryHomeOutput from a dict
online_center_category_home_output_from_dict = OnlineCenterCategoryHomeOutput.from_dict(online_center_category_home_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


