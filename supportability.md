# Supportability Checklist

* [Supportability Checklist](#supportability-checklist)
  * [Project readiness checklist](#project-readiness-checklist)
    * [1. General requirements](#general-requirements)
    * [2. Testing](#testing)
    * [3. Environments](#environments)
    * [4. Database](#database)
    * [5. Pipeline](#pipeline)
    * [6. Application logging](#application-logging)
    * [7. Exception tracking](#exception-tracking)
    * [8. Infrastructure monitoring](#infrastructure-monitoring)
    * [9. Vulnerability alerts](#vulnerability-alerts)
    * [10. Dependency upgrade alerts](#dependency-upgrade-alerts)
  * [Platform specific](#platform-specific)

## Project readiness checklist

Ensuring that your project adheres to the following RFCs is a good first step as these will be referenced further below:

* [RFC 011 - Editorconfig][rfc_011]
* [RFC 012 - Makefile standards][rfc_012]
* [RFC 013 - Code repository standards][rfc_013]

### 1. General requirements

* [ ] 1.1 Host application source code with Github, as a number of our services depend on this. A mirror should be used where this is not possible
* 1.2 No linting violations
  * [ ] 1.2.1 No style related linting violations and no overrides permitted
  * [ ] 1.2.2 No complexity related linting violations. Overrides permitted but must be commented inline with the code it is overriding
* [ ] 1.3 `.editorconfig` as per [RFC 011][rfc_011]
* [ ] 1.4 `Makefile` as per [RFC 012][rfc_012]
* [ ] 1.5 `README.md` as per [RFC 013][rfc_013]
* [ ] 1.6 `README.md` to also include references for all 3rd party services integration (including the standard Papertrail, Sentry, Github, Datadog or Dependabot services)
* 1.7 Local development seeds from production:
  * [ ] 1.7.1 Seed a specific item (for example a product, in an ecom system)
  * [ ] 1.7.2 Seed a specified number of items in batch
  * [ ] 1.7.3 Seed full catalogue of items
* [ ] 1.8 Local development seed fixtures (for example, using ffaker for Ruby/Rails)
* [ ] 1.9 Install an application profiler for the `development` environment (for example, Rack profiler `rack-mini-profiler`) so that metrics such as page render times, database query times can be used to make performance improvements

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
  * [ ] 4.1.1 Automatic failover (for example, Multi-AZ on AWS RDS)
  * [ ] 4.1.2 Daily automatic backups
  * [ ] 4.1.3 If feasible with provider, enable transaction log backups for PIT (Point in Time) restore ability

### 5. Pipeline

* 5.1 CircleCI configured to:
  * [ ] 5.1.1 Automatically test Github PRs
  * [ ] 5.1.2 `master` branch to run linting and tests
  * [ ] 5.1.3 Automatic deploy to `staging` environment
  * [ ] 5.1.4 Manual step to deploy to `production` environment
  * [ ] 5.1.5 Zero-downtime deployment step to production
  * [ ] 5.1.6 Manual step to flip between blue/green environment

### 6. Application logging

* 6.1 Papertrail installed and configured as remote application logger for:
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

* [ ] 7.1 Sentry installed and configured for exception capture for all non-development environments
* [ ] 7.2 Alerts sent to relevant Slack channel
* [ ] 7.3 Alerts sent to relevant team email address
* [ ] 7.4 UUID of request is sent as additional user data

### 8. Infrastructure monitoring

To be applied if infrastructure has been orchestrated and provisioned specifically for the project. Hosted solutions such as Heroku don't require infrastructure related monitoring at present.

* [ ] 8.1 Datadog (DD) sub-organisation created under Made Tech parent organisation
* [ ] 8.2 DD agent be installed on all production infrastructure
* [ ] 8.3 DD agent could be installed on non-production infrastructure if necessary
* [ ] 8.4 DD agent hostname configured according to proposed [RFC 008 - Server naming convention][rfc_008]
* 8.5 Monitors configured in DD for (warn/alert):
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

* [ ] 9.1 Configure Github to detect and alert on vulnerable dependencies (repository Settings > Data services > Vulnerability alerts)
* [ ] 9.2 Configure notifications to send alerts **TODO (can we target the Live Services team on Github)**

### 10. Dependency upgrade alerts

* 10.1 [ ] Configure Dependabot to submit PRs to Github repository with alerts TODO

## Platform specific

* [Ruby][ruby_reference]

[rfc_008]: https://github.com/madetech/rfcs/pull/9 "Proposed RFC 008 - Server naming convention"
[rfc_011]: https://github.com/madetech/rfcs/blob/master/rfc-011-editorconfig.md "RFC 011 - Editorconfig"
[rfc_012]: https://github.com/madetech/rfcs/blob/master/rfc-012-makefile-standards.md "RFC 012 - Makefile standards"
[rfc_013]: https://github.com/madetech/rfcs/blob/master/rfc-013-code-repositories.md "RFC 013 - Code repository standards"
[ruby_reference]: reference/ruby.md
