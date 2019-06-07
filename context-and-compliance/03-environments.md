# 3 - Environments

## 3.1 Application has corresponding environments and hosting

### 3.1.1 `testing` environment

#### Context & justification

The `testing` environment, as the name suggests, is an environment for testing. This is where manual testing for the development team occurs. Hence, it should only be accessed by those within the delivery teams.

#### Compliance

* [ ] `testing` should only be accessed by those within the delivery teams

### 3.1.2 `staging` environment

#### Context & justification

The `staging` environment is an environment typically used for external (customer, users, etc) reviews. The staging environment may also require showcasing to customers depending on feedback from reviews, however it is also on a feature by feature basis. This environment is additionally used for high level end-to-end (E2E) testing, as part of **Acceptance Test Driven Development (ATDD)**, which tests from the input of the system to the output of the system.

#### Compliance

* [ ] `staging` for external reviews and high level end-to-end testing in a production-like infrastructure

### 3.1.3 `production` environment

#### Context & justification

The `production` environment, as the name suggests, is for live usage and also for showcasing to customers. Showcasing during the `staging` or `production` environment may also depend on whether the application is live or not, however the latter is typically used for showcasing. 

#### Compliance

* [ ] `production` for live usage and showcasing to customer
