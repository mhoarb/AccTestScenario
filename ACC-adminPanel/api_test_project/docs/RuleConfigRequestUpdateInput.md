# RuleConfigRequestUpdateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score_type_id** | **int** |  | [optional] 
**period_day** | **int** |  | [optional] 
**period_max_day** | **int** |  | [optional] 
**min_unit** | **str** |  | [optional] 
**min_unit_value** | **int** |  | [optional] 
**max_unit_value** | **int** |  | [optional] 
**score** | **int** |  | [optional] 
**max_score_period_day** | **int** |  | [optional] 
**max_score_max_period_day** | **int** |  | [optional] 
**customer_level_id** | **int** |  | [optional] 
**group_id** | **int** |  | [optional] 
**check_validator** | **bool** |  | [optional] 
**min_checksum_value** | **int** |  | [optional] 
**min_check_count_value** | **int** |  | [optional] 
**unit_measure** | **str** |  | [optional] 
**max_checksum_value** | **int** |  | [optional] 
**max_check_count_value** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**effective_date** | **str** |  | [optional] 
**disable_date** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.rule_config_request_update_input import RuleConfigRequestUpdateInput

# TODO update the JSON string below
json = "{}"
# create an instance of RuleConfigRequestUpdateInput from a JSON string
rule_config_request_update_input_instance = RuleConfigRequestUpdateInput.from_json(json)
# print the JSON string representation of the object
print(RuleConfigRequestUpdateInput.to_json())

# convert the object into a dict
rule_config_request_update_input_dict = rule_config_request_update_input_instance.to_dict()
# create an instance of RuleConfigRequestUpdateInput from a dict
rule_config_request_update_input_from_dict = RuleConfigRequestUpdateInput.from_dict(rule_config_request_update_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


