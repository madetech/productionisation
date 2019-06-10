# 5 - Pipeline

## 5.1 Continuous Delivery (CD) pipeline configured

### 5.1.1 Automatically test pull requests

#### Context & justification

Pull requests should be automatically tested. To ensure Continuous Delivery (CD), it is important that this is configured accordingly. This is typically tied in with Continous Integration (CI) tools such as BitBucket Pipelines, CircleCI and TravisCI to name a few. CD ensures the functionality of the system delivers expected customer value. Hence, testing pull requests automatically enforces this as mentioned in [#2 - Testing](02-testing.md).

#### Compliance

* [ ] CD pipeline configured to automatically test pull requests

### 5.1.2 `master` branch to run code checks

#### Context & justification

The `master` branch should be configured to run code standard checks such as linting and tests. This is in order to deliver a system that corresponds to the expected customer value. All tests **should** be passing in `master`. 

#### Compliance

* [ ] CD pipeline configured for `master` branch to run **code standard checks (linting)**
* [ ] CD pipeline configured for `master` branch to run **tests**

### 5.1.3 Automatic deploy to `staging` environment

#### Context & justification

The process of deploying to `staging` environment should be automatic to conform with CD as best practice. The code/system can then be verified to ensure it works as intended. 

#### Compliance

* [ ] CD pipeline configured to automatically deploy to `staging` environment

### 5.1.4 Manual step to deploy to `production` environment

#### Context & justification

The process of deploying to `production` environment should be manual. This is to ensure the team is aware of what is being deployed and gives developers the chance to spot anything that may or may not be intended for production. A scheduled time for deployment to `production` environment is _recommended_ as at least one developer should be available for monitoring the application/system.

#### Compliance

* [ ] CD pipeline configured to be able to manually deploy to `production` environment

### 5.1.5 Zero downtime deployment step for **all** environments

#### Context & justification

There should be a zero downtime deployment process for the `staging` and `production` environments. An example of a zero downtime deployment would be the implementation of a blue/green environment. This is to ensure there is no downtime in the case of failure.

#### Compliance

* [ ] CD pipeline configured to have zero downtime (e.g. blue/green environment) deployment for **all** environments

## 5.2 All pipeline steps are defined in code within repository for chosen pipeline service

#### Context & justification

This is to ensure the team is aware of the CD pipeline process. In addition, defining your pipeline steps in code can sometimes give developers the access to more configuration options opposed to a web interface. This can also be versioned, audited as well as allowing review of build pipelines. Hence, everyone is aware of the pipeline process as it is in one place.

#### Compliance

* [ ] CD pipeline configured to have all steps defined in code within repository for chosen pipeline service
