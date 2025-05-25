# ReportChampionsLeagueLotteryParticipateOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**user_level_type** | **str** |  | [optional] 
**customer_number** | **int** |  | [optional] 
**mobile_number** | **str** |  | [optional] 
**chance_count** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.report_champions_league_lottery_participate_output import ReportChampionsLeagueLotteryParticipateOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ReportChampionsLeagueLotteryParticipateOutput from a JSON string
report_champions_league_lottery_participate_output_instance = ReportChampionsLeagueLotteryParticipateOutput.from_json(json)
# print the JSON string representation of the object
print(ReportChampionsLeagueLotteryParticipateOutput.to_json())

# convert the object into a dict
report_champions_league_lottery_participate_output_dict = report_champions_league_lottery_participate_output_instance.to_dict()
# create an instance of ReportChampionsLeagueLotteryParticipateOutput from a dict
report_champions_league_lottery_participate_output_from_dict = ReportChampionsLeagueLotteryParticipateOutput.from_dict(report_champions_league_lottery_participate_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


