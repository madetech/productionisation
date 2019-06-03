# Productionisation Checklist

* [Productionisation Checklist](#supportability-checklist)
  * [Project readiness checklist](#project-readiness-checklist)
    * [1. General requirements](#1-general-requirements)
    * [2. Testing](#2-testing)
    * [3. Environments](#3-environments)
    * [4. Database](#4-database)
    * [5. Pipeline](#5-pipeline)
    * [6. Application logging](#6-application-logging)
    * [7. Exception tracking](#7-exception-tracking)
    * [8. Infrastructure monitoring](#8-infrastructure-monitoring)
    * [9. Vulnerability alerts](#9-vulnerability-alerts)
    * [10. Dependency upgrade alerts](#10-dependency-upgrade-alerts)
  * [Platform specific](#platform-specific)
  * [Recommended services](#recommended-services)

## Project readiness checklist

Ensuring that your project adheres to the following RFCs is a good first step as these will be referenced further below:

* [RFC 011 - Editorconfig][rfc_011]
* [RFC 012 - Makefile standards][rfc_012]
* [RFC 013 - Code repository standards][rfc_013]

### 1. General requirements

* [ ] 1.1 Application source code hosted with a Git VCS service
* 1.2 No linting violations
  * [ ] 1.2.1 No style related linting violations and no overrides permitted
  * [ ] 1.2.2 No complexity related linting violations. Overrides permitted but must be commented inline with the code it is overriding
* [ ] 1.3 `.editorconfig` as per [RFC 011][rfc_011]
* [ ] 1.4 `Makefile` as per [RFC 012][rfc_012]
* [ ] 1.5 `README.md` as per [RFC 013][rfc_013]
* [ ] 1.6 `README.md` to also include references for all 3rd party service integrations
* 1.7 Local development seeds from production:
  * [ ] 1.7.1 Seed a specific item (for example a product, in an ecom system)
  * [ ] 1.7.2 Seed a specified number of items in batch
  * [ ] 1.7.3 Seed full catalogue of items
* [ ] 1.8 Local development seed fixtures (for example, using ffaker for Ruby/Rails)
* [ ] 1.9 Install an application profiler for the `development` environment so that metrics such as page render times, database query times can be used to make performance improvements
* [ ] 1.10 Decision making process documented using Architecture Decision Records (ADRs)

### 2. Testing

* [ ] 2.1 Test code coverage of 90% minimum
* [ ] 2.2 Unit tests that run in under 30 seconds
* [ ] 2.3 End-to-end tests that run in under 5 minutes

### 3. Environments

* 3.1 Application has corresponding environments and hosting for:
  * [ ] 3.1.1 `testing` for internal delivery team
  * [ ] 3.1.2 `staging` for showcasing to customer
  * [ ] 3.1.3 `production` for live usage

### 4. Database

* 4.1 Production database has:
  * [ ] 4.1.1 Automatic failover
  * [ ] 4.1.2 Daily automatic backups
  * [ ] 4.1.3 If feasible with provider, enable transaction log backups for PIT (Point in Time) restore ability

### 5. Pipeline

* 5.1 Continuous Delivery pipeline configured to:
  * [ ] 5.1.1 Automatically test pull requests
  * [ ] 5.1.2 `master` branch to run linting and tests
  * [ ] 5.1.3 Automatic deploy to `staging` environment
  * [ ] 5.1.4 Manual step to deploy to `production` environment
  * [ ] 5.1.5 Zero-downtime deployment step to production
  * [ ] 5.1.6 Manual step to flip between blue/green environment
* [ ] 5.2 All pipeline steps are defined in code within repository for chosen pipeline service

### 6. Application logging

* 6.1 Remote logging service installed and configured as remote application logger for:
  * [ ] 6.1.1 Main application
  * [ ] 6.1.2 Background workers
* 6.2 Appropriate log level configured:
  * [ ] 6.2.1 `production` set to `INFO`
  * [ ] 6.2.2 `staging` set to `DEBUG`
  * [ ] 6.2.3 `testing` set to `DEBUG`
* 6.3 Tagged logging configured to include:
  * [ ] 6.3.1 (Sub)domain of request
  * [ ] 6.3.2 Application environment (`production`, `staging` or `testing`)
  * [ ] 6.3.3 UUID of request
  * [ ] 6.3.4 Session ID
* [ ] 6.4 Ensure HTTP requests are condensed to a single line log output including:
  * [ ] 6.4.1 IP address of originating request
  * [ ] 6.4.2 HTTP method
  * [ ] 6.4.3 HTTP parameters
* [ ] 6.5 Ensure sensitive parameters are filtered from logs

### 7. Exception tracking

* [ ] 7.1 Remote exception tracking service installed and configured for exception capture for all non-development environments
* [ ] 7.2 Alerts sent to relevant instant chat channel
* [ ] 7.3 Alerts sent to relevant team email address
* [ ] 7.4 UUID of request is sent as additional user data
* [ ] 7.5 Reported exceptions are resolved within a week  
  _Exceptions that have been thrown but not caught or handled safely could lead to larger problems for applications and teams. It's good for teams to have the discipline of regularly checking, or acting upon reported exceptions as they occur during development to prevent these from accruing. If code changes have been made to handle these, the exceptions should be marked as resolved in the tracking service. No reported exceptions in the past week is a positive sign of well managed exceptions._

### 8. Infrastructure monitoring

To be applied if infrastructure has been orchestrated and provisioned specifically for the project. Hosted PaaS solutions don't require infrastructure related monitoring at present.

* [ ] 8.1 Sub-organisation created under parent organisation for each customer
* [ ] 8.2 Monitoring agent be installed on all production infrastructure
* [ ] 8.3 Monitoring agent could be installed on non-production infrastructure if necessary
* [ ] 8.4 Monitoring agent hostname configured according to proposed [RFC 008 - Server naming convention][rfc_008]
* 8.5 Monitors configured in infrastructure monitoring service for (warn/alert):
  * [ ] 8.5.1 Inode usage (80% / 90%)
  * [ ] 8.5.2 CPU load (75% / 85% average over 2 minutes)
  * [ ] 8.5.3 Disk usage (80% / 90%)
  * [ ] 8.5.4 Memory usage (80% / 90% average over 2 minutes)
  * [ ] 8.5.5 Host stopped reporting
  * [ ] 8.5.6 NTP sync
* 8.6 Monitors configured to alert via:
  * [ ] 8.6.1 Slack channel
  * [ ] 8.6.2 Team email address

### 9. Vulnerability alerts

* [ ] 9.1 Configure either VCS hosting service or Continuous Delivery pipeline to detect and alert on vulnerable dependencies
* [ ] 9.2 Configure notifications to send alerts

### 10. Dependency upgrade alerts

* 10.1 [ ] Configure a dependency upgrade notification service to submit pull requests to VCS service repository with alerts

## Platform specific

* [Ruby][ruby_reference]

## Recommended services

* VCS hosting - Github
* Remote logging - Papertrail
* Exception tracking - Sentry
* Infrastructure monitoring - Datadog
* Security vulnerability scanning - Github
* Dependency upgrade notifications - Dependabot
* PaaS - Heroku

[rfc_008]: https://github.com/madetech/rfcs/pull/9 "Proposed RFC 008 - Server naming convention"
[rfc_011]: https://github.com/madetech/rfcs/blob/master/rfc-011-editorconfig.md "RFC 011 - Editorconfig"
[rfc_012]: https://github.com/madetech/rfcs/blob/master/rfc-012-makefile-standards.md "RFC 012 - Makefile standards"
[rfc_013]: https://github.com/madetech/rfcs/blob/master/rfc-013-code-repositories.md "RFC 013 - Code repository standards"
[ruby_reference]: reference/ruby.md
