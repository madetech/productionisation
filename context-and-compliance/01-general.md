# 1 - General requirements

## 1.1 - Version control system (VCS)

#### Context & justification

It's important for a team to be able to collaborate on application code together and for this to be hosted somewhere centrally so that a current stable version of it can be maintained. It also serves the benefit as a basic form of backup of the code.

#### Compliance

* [ ] Application source code hosted with a Git VCS service

## 1.2 - Adhere to project coding standards

### 1.2.1 - Provides a style guideline

#### Context & justification

Language style guides act as a way to ensure code is written to a format that all developers can adhere to so that it is readable by the entire team. It prevents personal preferences and styles creeping into a codebase that then lead.

#### Compliance

* [ ] Provides a style guideline

### 1.2.2 - Enforce coding standards (e.g. automated linter on code changes)

#### Complexity & justification


#### Compliance

* [ ] 

## 1.3 - Consistent code editor configurations

Code editors can be configured in a number of ways, and as developers have the choice to code using their preferred editor, similar to the importantance of conforming to a language style format, editors need to follow a set of agreed rules.

Without this, unintention code change commits might be added to an application, such as the switching from tabs to soft tabs (spaces) which can cause readability issues when reviewing change requests.

#### Compliance

* [ ] .editorconfig present for application based on RFC011

## 1.4 - Makefile

#### Context & justification

Usually the `make` tool is available 'out-of-the-box' with all development machines, and serves as an easy and guaranteed way for a developer to bootstrap and start work on a project after cloning a repository.

By all applications using a `Makefile` as the standard interface for manipulating an application during development, and with a common set of targets, developers will have to spend less time onboarding onto a project.

#### Compliance

* [ ] `Makefile` present for application conforming to RFC012

## 1.5 - README.md

#### Context & justification

The README.md is the face of your project, therefore, it should be written as a brief review that gives a basic introduction to the software. Following a standard format helps onboarding new engineers, maintainability and gives a clear overview of our public repositories. 

#### Compliance
* [ ] `README.md` as per RFC 013

## 1.6 - List of 3rd party services

#### Context & justification
Listing 3rd party services helps keep track of all dependencies, therefore, minimising the time of resolving dependency related issues. Nevertheless, gives credits to the authors. 

#### Compliance
* [ ] 1.6 `README.md` to also include references for all 3rd party service integrations