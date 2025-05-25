# IranCardHomeOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iran_card_output** | [**IranCardOutput**](IranCardOutput.md) |  | [optional] 
**iran_card_exists** | **bool** |  | [optional] 
**iran_card_banner_outputs** | [**List[BannerOutput]**](BannerOutput.md) |  | [optional] 
**iran_card_category_outputs** | [**List[IranCardCategoryOutput]**](IranCardCategoryOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.iran_card_home_output import IranCardHomeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of IranCardHomeOutput from a JSON string
iran_card_home_output_instance = IranCardHomeOutput.from_json(json)
# print the JSON string representation of the object
print(IranCardHomeOutput.to_json())

# convert the object into a dict
iran_card_home_output_dict = iran_card_home_output_instance.to_dict()
# create an instance of IranCardHomeOutput from a dict
iran_card_home_output_from_dict = IranCardHomeOutput.from_dict(iran_card_home_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


