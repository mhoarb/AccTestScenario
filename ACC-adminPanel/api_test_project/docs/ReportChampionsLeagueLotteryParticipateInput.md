# ReportChampionsLeagueLotteryParticipateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**customer_number** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**chance_count** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.report_champions_league_lottery_participate_input import ReportChampionsLeagueLotteryParticipateInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportChampionsLeagueLotteryParticipateInput from a JSON string
report_champions_league_lottery_participate_input_instance = ReportChampionsLeagueLotteryParticipateInput.from_json(json)
# print the JSON string representation of the object
print(ReportChampionsLeagueLotteryParticipateInput.to_json())

# convert the object into a dict
report_champions_league_lottery_participate_input_dict = report_champions_league_lottery_participate_input_instance.to_dict()
# create an instance of ReportChampionsLeagueLotteryParticipateInput from a dict
report_champions_league_lottery_participate_input_from_dict = ReportChampionsLeagueLotteryParticipateInput.from_dict(report_champions_league_lottery_participate_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


