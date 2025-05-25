# IranCardOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_state** | **str** |  | [optional] 
**card_no** | **str** |  | [optional] 
**cash_back** | **str** |  | [optional] 
**upgrade_point** | **str** |  | [optional] 
**bal_point** | **str** |  | [optional] 
**bal_amount** | **str** |  | [optional] 
**exists** | **bool** |  | [optional] 
**last_update_date** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.iran_card_output import IranCardOutput

# TODO update the JSON string below
json = "{}"
# create an instance of IranCardOutput from a JSON string
iran_card_output_instance = IranCardOutput.from_json(json)
# print the JSON string representation of the object
print(IranCardOutput.to_json())

# convert the object into a dict
iran_card_output_dict = iran_card_output_instance.to_dict()
# create an instance of IranCardOutput from a dict
iran_card_output_from_dict = IranCardOutput.from_dict(iran_card_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


