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
