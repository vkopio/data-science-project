run:
	@python -m src

test:
	ENV=test python -m unittest

test-coverage:
	ENV=test coverage run -m unittest

test-coverage-upload:
	ENV=test coverage run -m unittest
	coverage xml
	python-codacy-coverage -r coverage.xml
