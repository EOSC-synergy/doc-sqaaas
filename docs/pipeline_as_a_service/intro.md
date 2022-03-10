---
title: The Pipeline as a Service module
---

The **Pipeline as a Service** module offers developers with a graphical means
to compose workflows, aka CI/CD pipelines, that carry out the software
verification and validation (V&V) processes in an automated fashion.

Hence, CI/CD pipelines are associated with code repositories, since it is the
code or documentation (docs-as-code) the main target of the quality checks
that are defined in them.

## What can the Pipeline as a Service do for you?
### Pipeline composition & sharing
The main feature and objective of the Pipeline as a Service module is to
compose on-demand and ready-to-use CI/CD pipelines based on the feedback of
the user. Thus, the web interface provides a means to distribute the resultant
pipeline so it can be successfully added to the target code repository:
1. Download the pipeline as a ZIP file, so that the developer needs to
   manually extract & push to the desired repository.
2. Create a [GitHub's pull requests](https://docs.github.com/en/pull-requests).
   This option will automatically create a pull request to a given target
   repository. By simply merging the pull request, the pipeline will be added
   to your code repository.
### Pipeline execution & refactoring
Being able to test the brand-new pipeline is a helpful feature to secure its
operation once is added to the code repository. Any failure or unintended
behaviour can be worked out by refactoring the stages that the pipeline was
broken down into.

## Features of CI/CD pipelines composed by SQAaaS
1. CI/CD pipelines can be placed either in the same repository as the code or
   documentation, or in a separate repository. The first option is the
   *recommended approach* since the pipeline will react promptly to the
   repository events (e.g. push & pull operations) and be triggered
   automatically without the need of additional customization.
2. CI/CD pipelines are technology-specific[^1]:
   - [Jenkins code pipelines](https://www.jenkins.io/doc/book/pipeline/) are
     the underlying technology of the CI/CD pipelines composed through the
     current SQAaaS module. This means that *a Jenkins CI service is always
     required for the CI/CD pipelines to be executed*.
   - [Git](https://git-scm.com/) is the de-facto tool for source code or
     documentation version control, and thus, the solution being adopted by
     SQAaaS.
   [^1]: For certain features, such as pipeline execution and sharing (via
         pull requests), the current version of the Pipeline as a Service
         module only supports [GitHub](https://github.com) plaform through the
         [GitHub API](https://docs.github.com/rest). This is not an issue from
         the end user's perspective, as the resultant CI/CD pipelines can be
         used in any Git environment or social coding platform other than
         GitHub, such as [Gitlab](https://about.gitlab.com/).