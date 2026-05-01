import json
import boto3
from datetime import datetime, timezone

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('PortfolioMetadata')

def lambda_handler(event, context):
    method = event.get("requestContext", {}).get("http", {}).get("method")

    # GET /lastDeploy
    if method == "GET":
        try:
            response = table.get_item(Key={"id": "site"})
            item = response.get("Item", {})

            return {
                "statusCode": 200,
                "headers": {"Content-Type": "application/json"},
                "body": json.dumps({
                    "lastDeploy": item.get("lastDeploy")
                })
            }
        except Exception as e:
            return {
                "statusCode": 500,
                "headers": {"Content-Type": "application/json"},
                "body": json.dumps({"error": str(e)})
            }

    # POST /lastDeploy
    if method == "POST":
        try:
            now = datetime.now(timezone.utc).isoformat()

            table.put_item(Item={
                "id": "site",
                "lastDeploy": now
            })

            return {
                "statusCode": 200,
                "headers": {"Content-Type": "application/json"},
                "body": json.dumps({"lastDeploy": now})
            }
        except Exception as e:
            return {
                "statusCode": 500,
                "headers": {"Content-Type": "application/json"},
                "body": json.dumps({"error": str(e)})
            }

    return {
        "statusCode": 400,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps({"error": "Unsupported method"})
    }