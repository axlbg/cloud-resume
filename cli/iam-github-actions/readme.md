## Create user
```sh
aws iam create-user --user-name github-actions-deployer
```

## Attach policy
```sh
aws iam put-user-policy \
--user-name github-actions-deployer \
--policy-name github-actions-deploy \
--policy-document file://github-actions-policy.json
```

## Create secrets access key 
```sh
aws iam create-access-key --user-name github-actions-deployer
```