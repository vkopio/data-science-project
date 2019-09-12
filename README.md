Data Science Project
====================
[![Build Status](https://travis-ci.org/vkopio/data-science-project.svg?branch=master)](https://travis-ci.org/vkopio/data-science-project)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/11a22512c78d4da6a857c2b49edaa6d7)](https://www.codacy.com/manual/V-Kopio/data-science-project?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=vkopio/data-science-project&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/11a22512c78d4da6a857c2b49edaa6d7)](https://www.codacy.com/manual/V-Kopio/data-science-project?utm_source=github.com&utm_medium=referral&utm_content=vkopio/data-science-project&utm_campaign=Badge_Coverage)

This repository contains the Introduction to Data Science course project.

Setup development environment
-----------------------------

The project uses Python 3.7 with a virtualenv. The following commands should setup the environment for Debian-based
Linux distributions:

	sudo apt update
	sudo apt install -y python3.7
	virtualenv --python=/usr/bin/python3.7 venv
	. venv/bin/activate
	pip install pipenv
	pipenv install --dev
