# BankPerson


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**open_branch** | [**Branch**](Branch.md) |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**person** | [**Person**](Person.md) |  | [optional] 
**accounts** | [**List[Account]**](Account.md) |  | [optional] 
**terminals** | [**List[Terminal]**](Terminal.md) |  | [optional] 
**customer_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.bank_person import BankPerson

# TODO update the JSON string below
json = "{}"
# create an instance of BankPerson from a JSON string
bank_person_instance = BankPerson.from_json(json)
# print the JSON string representation of the object
print(BankPerson.to_json())

# convert the object into a dict
bank_person_dict = bank_person_instance.to_dict()
# create an instance of BankPerson from a dict
bank_person_from_dict = BankPerson.from_dict(bank_person_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


