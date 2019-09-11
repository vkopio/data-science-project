Python-template
===============
[![Build Status](https://travis-ci.org/osakunta/python-template.svg?branch=master)](https://travis-ci.org/osakunta/python-template)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a7b1e223cd874c41a12211c148620171)](https://www.codacy.com/app/Osakunta/python-template?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=osakunta/python-template&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/a7b1e223cd874c41a12211c148620171)](https://www.codacy.com/app/Osakunta/python-template?utm_source=github.com&utm_medium=referral&utm_content=osakunta/python-template&utm_campaign=Badge_Coverage)

This repository is a generic template for Python projects.

Setting up CI
-------------
This project template uses Travis as a CI pipeline and Codacy for quality and coverage metrics. Travis also builds a
Docker image and pushes it to Docker Hub so Docker Hub credentials are needed.

To get the newly initialized project configured, add it to [Travis](https://travis-ci.org/account/repositories) and
[Codacy](https://app.codacy.com/wizard/projects). After that, go to the project view in Codacy and choose
`Settings > Integrations > Add integration > Project API` and click the `Settings` button of the newly created Project
API. Travis needs the `Project API Token` to upload coverage data to Codacy.

Encrypt the needed environment variables to `.travis.yml` with the following commands:

    travis encrypt CODACY_PROJECT_TOKEN=[] --add
    travis encrypt DOCKER_USERNAME=[] --add
    travis encrypt DOCKER_PASSWORD=[] --add

If you want to add Slack notifications, use:

    travis encrypt [SLACK_TOKEN] --add notifications.slack

You should also change the badges at the top of this `README` to the ones that are generated for your project. Travis
badge can be found next to the project name and Codacy badges are in the project settings.
