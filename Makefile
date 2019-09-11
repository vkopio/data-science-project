NAME   := osakunta/python-template
TAG    := $$(git log -1 --pretty=%h)
IMAGE  := ${NAME}:${TAG}
LATEST := ${NAME}:latest
EXEC   := python-template

docker-build:
	sudo docker build -t ${IMAGE} .
	sudo docker tag ${IMAGE} ${LATEST}

docker-run:
	sudo docker run -it --name ${EXEC} ${LATEST}

docker-rm:
	sudo docker rm ${EXEC}

docker-push:
	sudo docker push ${NAME}

docker-sh:
	sudo docker exec -it ${EXEC} /bin/sh

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

dev-install:
	sudo apt update
	sudo apt install -y python3.7
	virtualenv --python=/usr/bin/python3.7 venv
	. venv/bin/activate
	pip install pipenv
	pipenv install --dev
