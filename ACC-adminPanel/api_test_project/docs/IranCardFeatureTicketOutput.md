# IranCardFeatureTicketOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**image_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**category_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.iran_card_feature_ticket_output import IranCardFeatureTicketOutput

# TODO update the JSON string below
json = "{}"
# create an instance of IranCardFeatureTicketOutput from a JSON string
iran_card_feature_ticket_output_instance = IranCardFeatureTicketOutput.from_json(json)
# print the JSON string representation of the object
print(IranCardFeatureTicketOutput.to_json())

# convert the object into a dict
iran_card_feature_ticket_output_dict = iran_card_feature_ticket_output_instance.to_dict()
# create an instance of IranCardFeatureTicketOutput from a dict
iran_card_feature_ticket_output_from_dict = IranCardFeatureTicketOutput.from_dict(iran_card_feature_ticket_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


