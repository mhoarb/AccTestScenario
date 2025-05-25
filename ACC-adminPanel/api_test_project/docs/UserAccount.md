# UserAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**username** | **str** |  | [optional] 
**otp_password** | **str** |  | [optional] 
**password** | **str** |  | [optional] 
**otp_requested_time** | **datetime** |  | [optional] 
**profile_picture_id** | **int** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**bank_person** | [**BankPerson**](BankPerson.md) |  | [optional] 
**score** | **int** |  | 
**total_loan_score** | **int** |  | 
**total_lottery_score** | **int** |  | 
**last_score_update** | **datetime** |  | [optional] 
**gem** | **int** |  | 
**authorities** | [**List[GrantedAuthority]**](GrantedAuthority.md) |  | [optional] 
**is_show_name** | **bool** |  | 
**is_account_non_expired** | **bool** |  | 
**is_account_non_locked** | **bool** |  | 
**is_credentials_non_expired** | **bool** |  | 
**is_enabled** | **bool** |  | 
**admin** | **bool** |  | [optional] 
**ws_admin** | **bool** |  | [optional] 
**rules_engine_admin** | **bool** |  | [optional] 
**branch_admin** | **bool** |  | [optional] 
**branch_employee** | **bool** |  | [optional] 
**account_non_locked** | **bool** |  | [optional] 
**credentials_non_expired** | **bool** |  | [optional] 
**account_non_expired** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.user_account import UserAccount

# TODO update the JSON string below
json = "{}"
# create an instance of UserAccount from a JSON string
user_account_instance = UserAccount.from_json(json)
# print the JSON string representation of the object
print(UserAccount.to_json())

# convert the object into a dict
user_account_dict = user_account_instance.to_dict()
# create an instance of UserAccount from a dict
user_account_from_dict = UserAccount.from_dict(user_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


