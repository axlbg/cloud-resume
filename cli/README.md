## 1. Create s3 bucket
https://docs.aws.amazon.com/cli/latest/reference/s3api/create-bucket.html

```sh
aws s3api create-bucket \
--bucket my-bucket-for-my-web-1234 \
--region sa-east-1 \
--create-bucket-configuration LocationConstraint=sa-east-1
```

## 2. Create origin access control (OAC)
https://docs.aws.amazon.com/cli/latest/reference/cloudfront/create-origin-access-control.html

```sh
aws cloudfront create-origin-access-control \
--origin-access-control-config '{
    "Name": "my-oac-1",
    "Description": "OAC for S3 bucket",
    "SigningProtocol": "sigv4",
    "SigningBehavior": "always",
    "OriginAccessControlOriginType": "s3"
}'
```

> Save `Id` from the response 


## 3. Create CloudFront distribution
https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html
https://docs.aws.amazon.com/cli/latest/reference/cloudfront/create-distribution.html

Need:
- OAC Id 
- S3 Origin ('<my-bucket>.s3.amazonaws.com')
- Redirect HTTP to HTTPS
- `dist.config.json`

```sh
aws cloudfront create-distribution \
--distribution-config file://dist-config.json
```

> Save `ARN` from the response 


## 4. Edit bucket policy 
https://docs.aws.amazon.com/cli/latest/reference/s3api/put-bucket-policy.html

So CloudFront can have access to the bucket

```sh
aws s3api put-bucket-policy \
--bucket my-bucket-for-my-web-1234 \
--policy file://policy_AllowCloudFrontService.json
```


## 5. Upload my app (locally builded) to s3 bucket
https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html

```sh
aws s3 sync ../web/dist/portfolio/browser s3://my-bucket-for-my-web-1234
```

## 6. Create DynamoDB Table
https://docs.aws.amazon.com/cli/latest/reference/dynamodb/create-table.html

```sh
aws dynamodb create-table \
--table-name PortfolioMetadata \
--attribute-definitions AttributeName=id,AttributeType=S \
--key-schema AttributeName=id,KeyType=HASH \
--billing-mode PAY_PER_REQUEST \
--region sa-east-1
```


## 7. Create Lambda Function and authorize access to DynamoDB
https://docs.aws.amazon.com/cli/latest/reference/iam/create-role.html

First create the IAM Role to attach to my Lambda

```sh
aws iam create-role \
--role-name lambda-dynamodb-access-role \
--assume-role-policy-document file://trust-policy.json
```

> Save `ARN` from the response 

Give permissions to my role
```sh
aws iam put-role-policy \
--role-name lambda-dynamodb-access-role \
--policy-name dynamodb-lastdeploy \
--policy-document file://dynamodb-policy.json
```

zip and create the lambda function
```sh
zip -j last-deploy.zip ../lambda/last_deploy.py
```

https://docs.aws.amazon.com/cli/latest/reference/lambda/create-function.html
```sh
aws lambda create-function \
--function-name last-deploy \
--runtime python3.12 \
--zip-file fileb://last-deploy.zip \
--handler last_deploy.lambda_handler \
--role arn:aws:iam::962704574066:role/lambda-dynamodb-access-role
```

> Save `ARN` from the response 


## 8. Create API Gateway 
https://docs.aws.amazon.com/cli/latest/reference/apigatewayv2/create-api.html

```sh
aws apigatewayv2 create-api \
--name PortfolioMetadata-api \
--protocol-type HTTP
```

> Save `ApiId` from the response 


## 9. Attach integration and Create API Endpoints
https://docs.aws.amazon.com/cli/latest/reference/apigatewayv2/create-integration.html
https://docs.aws.amazon.com/cli/latest/reference/apigatewayv2/create-route.html

```sh
aws apigatewayv2 create-integration \
--api-id mrz1z6xyq1 \
--integration-type AWS_PROXY \
--integration-uri arn:aws:lambda:sa-east-1:962704574066:function:last-deploy \
--payload-format-version 2.0
```

> Save `IntegrationId` from the response 

```sh
aws apigatewayv2 create-route \
--api-id mrz1z6xyq1 \
--route-key 'POST /lastDeploy' \
--target integrations/wsu16r8
```

```sh
aws apigatewayv2 create-route \
--api-id mrz1z6xyq1 \
--route-key 'GET /lastDeploy' \
--target integrations/wsu16r8
```

## 10. Create API Gateway stage
https://docs.aws.amazon.com/cli/latest/reference/apigatewayv2/create-stage.html

Using `$default` stage so the URL has no prefix

```sh
aws apigatewayv2 create-stage \
--api-id mrz1z6xyq1 \
--stage-name '$default' \
--auto-deploy
```

## 11. Authorize CORS and API policies
https://docs.aws.amazon.com/cli/latest/reference/lambda/add-permission.html

Source ARN format is: `arn:aws:execute-api:{region}:{account-id}:{api-id}/*/*`

```sh
aws lambda add-permission \
--function-name last-deploy \
--statement-id apigateway-access \
--action lambda:InvokeFunction \
--principal apigateway.amazonaws.com \
--source-arn "arn:aws:execute-api:sa-east-1:962704574066:mrz1z6xyq1/*/*"
```


Allow All Orirings is temporally for testing
```sh
aws apigatewayv2 update-api \
--api-id mrz1z6xyq1 \
--cors-configuration \
AllowOrigins="*",AllowMethods="GET,POST",AllowHeaders="Content-Type,Authorization"
```