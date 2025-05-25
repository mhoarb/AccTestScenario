# LoadAllByCatergoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**ReportNotificationInput**](ReportNotificationInput.md) |  | [optional] 
**pageable** | [**Pageable**](Pageable.md) |  | [optional] 

## Example

```python
from openapi_client.models.load_all_by_catergory_request import LoadAllByCatergoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LoadAllByCatergoryRequest from a JSON string
load_all_by_catergory_request_instance = LoadAllByCatergoryRequest.from_json(json)
# print the JSON string representation of the object
print(LoadAllByCatergoryRequest.to_json())

# convert the object into a dict
load_all_by_catergory_request_dict = load_all_by_catergory_request_instance.to_dict()
# create an instance of LoadAllByCatergoryRequest from a dict
load_all_by_catergory_request_from_dict = LoadAllByCatergoryRequest.from_dict(load_all_by_catergory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


