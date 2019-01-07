# 1 - General requirements

## 1.1 - Version control system (VCS)

#### Context & justification

It's important for a team to be able to collaborate on application code together and for this to be hosted somewhere centrally so that a current stable version of it can be maintained. It also serves the benefit as a basic form of backup of the code.

#### Compliance

* [ ] Application source code hosted with a Git VCS service

## 1.2 - Linting violations

### 1.2.1 - No style related linting violations

#### Context & justification

Language style guides act as a way to ensure code is written to a format that all developers can adhere to so that it is readable by the entire team. It prevents personal preferences and styles creeping into a codebase that then lead.

#### Compliance

* [ ] No style related linting violations or overrides

### 1.2.2 - No complexity related linting violations

#### Complexity & justification

Complexity metrics are a good health check on code quality, but do not always understand the intent of the developer. For example, methods that consist of hundreds of lines are usually a smell that a method could be broken up into more readable and manageable methods with single responsibilities. However, some methods might have valid justifications for being 20 lines long, instead of the suggested 15 lines, whereby splitting the method up into four other methods for the sake of passing a linting check might actually make the code less readable to a developer. In these instances, a clearly defined override can be used when added inline to the method.

#### Compliance

* [ ] No complexity related linting violations
* [ ] Overrides are commented inline with the code where the linting rule is being overridden

## 1.3 - Consistent code editor configurations

Code editors can be configured in a number of ways, and as developers have the choice to code using their preferred editor, similar to the importantance of conforming to a language style format, editors need to follow a set of agreed rules.

Without this, unintention code change commits might be added to an application, such as the switching from tabs to soft tabs (spaces) which can cause readability issues when reviewing change requests.

#### Compliance

* [ ] .editorconfig present for application based on RFC011

## 1.4 - Makefile

#### Context & justification

Usually the `make` tool is available 'out-of-the-box' with all development machines, and serves as an easy and guaranteed way for a developer to bootstrap and start work on a project after cloning a repository.

By all applications using a `Makefile` as the standard interface for manipulating an application during development, and with a common set of targets, developers will have to spend less time onboarding onto a project.

#### Compliance

* [ ] `Makefile` present for application conforming to RFC012

## 1.5 - README.md

#### Context & justification

#### Compliance

## 1.6 - List of 3rd party services

#### Context & justification

#### Compliance
