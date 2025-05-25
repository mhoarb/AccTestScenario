# PrizeTitleOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**lottery_id** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.prize_title_output import PrizeTitleOutput

# TODO update the JSON string below
json = "{}"
# create an instance of PrizeTitleOutput from a JSON string
prize_title_output_instance = PrizeTitleOutput.from_json(json)
# print the JSON string representation of the object
print(PrizeTitleOutput.to_json())

# convert the object into a dict
prize_title_output_dict = prize_title_output_instance.to_dict()
# create an instance of PrizeTitleOutput from a dict
prize_title_output_from_dict = PrizeTitleOutput.from_dict(prize_title_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


