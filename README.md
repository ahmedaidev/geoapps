# GeoApps DevOps Project

[![CircleCI](https://circleci.com/gh/ahmedaidev/geoapp-latest/tree/main.svg?style=svg)](https://circleci.com/gh/ahmedaidev/geoapp-latest/tree/main)

![pipeline](https://raw.githubusercontent.com/ahmedaidev/geoapp-latest/main/pipeline.jpg)

A continuous delivery pipeline for a cross-platform application in ionic-react that is deployed on a highly-available and scalable infrastructure on AWS using a blue-green deployment strategy.

## Prerequisites

- [Nodejs 14](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [GitHub account](https://github.com)
- [CircleCi account](https://circleci.com)
- [AWS account](https://aws.amazon.com/)
- [ThisDB api key and bucket](https://thisdb.com)
- [Android Studio](https://developer.android.com/studio/) (optional)
- [Xcode](https://developer.apple.com/xcode/) (optional)

## Development

### Steps

1. Start the project with docker-compose

```
docker compose up -d
```

## Production

### Configuration

1. Open your AWS account and create an S3 bucket
2. Inside your AWS account create and RDS PostgreSQL instance with Postgis extension
3. Go to file ./infra/terraform/main.tf
4. Change the AWS S3 bucket name to your bucket name
5. Open geoserver console and change data store host configuration to your RDS instance

### Steps

1. Fork the repository

2. In you AWS account create an RDS PostgreSQL instance

3. Setup repository with CircleCi (Cancel workflow)

4. Inside CircleCi console, edit project settings to set environment variables

| KEY                   | VALUE                                    |
| --------------------- | ---------------------------------------- |
| AWS_ACCESS_KEY_ID     | {from IAM user with programmatic access} |
| AWS_SECRET_ACCESS_KEY | {from IAM user with programmatic access} |
| AWS_DEFAULT_REGION    | {your default region in aws}             |
| DOCKERHUB_USERNAME    | {your dockerhub username}                |
| DOCKERHUB_PASSWORD    | {your your dockerhub password}           |
| THISDB_BUCKET         | {Your bucket name from thisdb.com}       |
| THISDB_API_KEY        | {Your API key from thisdb.com}           |

5. Run the workflow again to deploy the project in your AWS infrastructure.

## Built With

- [Circle CI](www.circleci.com) - Cloud-based CI/CD service
- [Amazon AWS](https://aws.amazon.com/) - Cloud services
- [Terraform](https://www.terraform.io/) - Infrastructure as code
- [Ansible](https://www.ansible.com/) - Configuration management tool
