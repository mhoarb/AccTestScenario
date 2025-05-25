# RuleConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**description** | **str** |  | 
**score_type** | [**ReScoreType**](ReScoreType.md) |  | 
**score_type_name** | **str** |  | 
**period** | **int** |  | 
**period_max** | **int** |  | 
**custom_func_calculator_name** | **str** |  | [optional] 
**min_unit** | **str** |  | 
**min_unit_value** | **int** |  | [optional] 
**max_unit_value** | **int** |  | [optional] 
**score** | **int** |  | 
**max_score_period_day** | **int** |  | 
**max_score_max_period_day** | **int** |  | 
**customer_level** | [**CustomerLevel**](CustomerLevel.md) |  | [optional] 
**group** | [**CustomerGroup**](CustomerGroup.md) |  | [optional] 
**check_validator** | **bool** |  | 
**min_checksum_value** | **int** |  | 
**min_check_count_value** | **int** |  | 
**max_checksum_value** | **int** |  | 
**max_check_count_value** | **int** |  | 
**unit_measure** | **str** |  | 

## Example

```python
from openapi_client.models.rule_config import RuleConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RuleConfig from a JSON string
rule_config_instance = RuleConfig.from_json(json)
# print the JSON string representation of the object
print(RuleConfig.to_json())

# convert the object into a dict
rule_config_dict = rule_config_instance.to_dict()
# create an instance of RuleConfig from a dict
rule_config_from_dict = RuleConfig.from_dict(rule_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


