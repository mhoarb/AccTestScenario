# PurchaseOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**score_count** | **int** |  | [optional] 
**purchase_type** | **str** |  | [optional] 
**purchase_time** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.purchase_output import PurchaseOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseOutput from a JSON string
purchase_output_instance = PurchaseOutput.from_json(json)
# print the JSON string representation of the object
print(PurchaseOutput.to_json())

# convert the object into a dict
purchase_output_dict = purchase_output_instance.to_dict()
# create an instance of PurchaseOutput from a dict
purchase_output_from_dict = PurchaseOutput.from_dict(purchase_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


