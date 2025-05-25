import schemathesis

schema = schemathesis.from_path("swagger.json")

@schema.parametrize()
def test_api(case):
    response = case.call()
    case.validate_response(response)

