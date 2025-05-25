# CheckVersionOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mandatory_update** | **bool** |  | [optional] 
**update_available** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.check_version_output import CheckVersionOutput

# TODO update the JSON string below
json = "{}"
# create an instance of CheckVersionOutput from a JSON string
check_version_output_instance = CheckVersionOutput.from_json(json)
# print the JSON string representation of the object
print(CheckVersionOutput.to_json())

# convert the object into a dict
check_version_output_dict = check_version_output_instance.to_dict()
# create an instance of CheckVersionOutput from a dict
check_version_output_from_dict = CheckVersionOutput.from_dict(check_version_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


