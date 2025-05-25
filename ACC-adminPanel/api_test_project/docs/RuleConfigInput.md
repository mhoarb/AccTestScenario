# RuleConfigInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score_type_id** | **int** |  | 
**period_day** | **int** |  | 
**period_max_day** | **int** |  | 
**min_unit** | **str** |  | 
**score** | **int** |  | 
**max_score_period_day** | **int** |  | 
**max_score_max_period_day** | **int** |  | 
**check_validator** | **bool** |  | 
**min_checksum_value** | **int** |  | 
**min_check_count_value** | **int** |  | 
**unit_measure** | **str** |  | 
**max_checksum_value** | **int** |  | 
**max_check_count_value** | **int** |  | 
**description** | **str** |  | 
**effective_date** | **str** |  | 
**disable_date** | **str** |  | [optional] 
**min_unit_value** | **int** |  | [optional] 
**max_unit_value** | **int** |  | [optional] 
**customer_level_id** | **int** |  | [optional] 
**group_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.rule_config_input import RuleConfigInput

# TODO update the JSON string below
json = "{}"
# create an instance of RuleConfigInput from a JSON string
rule_config_input_instance = RuleConfigInput.from_json(json)
# print the JSON string representation of the object
print(RuleConfigInput.to_json())

# convert the object into a dict
rule_config_input_dict = rule_config_input_instance.to_dict()
# create an instance of RuleConfigInput from a dict
rule_config_input_from_dict = RuleConfigInput.from_dict(rule_config_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


