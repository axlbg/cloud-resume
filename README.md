# ☁️ Cloud Portfolio

Personal portfolio website built as part of my learning journey in AWS and cloud infrastructure while also serving as my public online profile.

## 🚀 Overview

The site is a static Angular app hosted on S3, delivered globally through CloudFront, and secured via HTTPS. A serverless stack handles the backend, tracking and exposing the last deploy timestamp to the frontend. Deployments are fully automated via GitHub Actions.

The infrastructure was built three times using different approaches:
through the AWS Management Console (undocumented), via AWS CLI (documented in `/cli`), and via CloudFormation (documented in `/cloudformation`).

Security is a core focus throughout — from locked-down bucket policies and least-privilege IAM roles to hardened CI/CD pipelines with no exposed credentials.

---

## 🛠️ Tech Stack & Concepts

### Cloud — AWS
- **S3** — Static file hosting
- **CloudFront** — CDN with HTTPS and HTTP→HTTPS redirect
- **OAC (Origin Access Control)** — Restricts S3 access to CloudFront only
- **DynamoDB** — NoSQL table storing last deploy metadata
- **Lambda** — Serverless function handling GET/POST requests — Using Python
- **API Gateway (HTTP API)** — Exposes Lambda as REST-like endpoints
- **Route53** — DNS management and ACM certificate validation
- **IAM** — Roles and least-privilege policies

### Frontend
- **Angular** — SPA compiled to static files and synced to S3

### CI/CD
- **GitHub Actions** — On push to `main`: builds the Angular app, syncs to S3, and calls POST `/lastDeploy` to record the deploy timestamp
- **Environment secrets** — AWS credentials and API endpoint stored as GitHub secrets

### Security
- S3 bucket is private — no public access, only reachable via CloudFront
- IAM role scoped to `dynamodb:GetItem` and `dynamodb:PutItem` only
- API Gateway CORS configured to restrict allowed origins
- POST Request requires authorization token
- Lambda environments variables to secure token
- GitHub Actions uses **repository secrets**
- Custom domain with SSL/TLS certificate validated via Route 53

---

## 📁 Repo Structure

```
/

├── .github/
|   └── workflows/        # GitHub Actions CI/CD pipelines
├── web/                  # Angular frontend
├── lambda/               # Python Lambda function
├── cli/                  # AWS infrastructure setup via CLI (documented step by step)
└── cloudformation/       # Same infrastructure as CloudFormation templates
```

---

## 🏗️ How It Works

```
GitHub Actions (on push to main)
     │
     ├── 1. Build Angular app
     ├── 2. Sync static files → S3 (private bucket)
     └── 3. POST /lastDeploy → API Gateway → Lambda → DynamoDB

User visits the site
     │
     └── CloudFront (HTTPS)
           ├── Serves static files from S3 (via OAC — bucket is never public)
           └── Frontend calls GET /lastDeploy → API Gateway → Lambda → DynamoDB
```

Every deploy automatically records its timestamp in DynamoDB. The frontend reads it on load and displays when the site was last updated.

---

## 🌍 Live Site

https://axelguzman.com

---
