.PHONY: bootstrap clean lint test server
.DEFAULT_GOAL := test

test: clean lint
	@python3 -m pytest tests/ --cov=./ \
		-p no:cacheprovider \
		-W ignore::DeprecationWarning

cov: clean lint
	@python3 -m pytest tests/ --cov=./ \
		--cov-report=html \
		-p no:cacheprovider \
		-W ignore::DeprecationWarning

server:
	@python3 server/api.py

lint:
	@flake8 .

clean:
	@find . -type f -name '*.pyc' -delete

bootstrap:
	@python3 -m pip install -r requirements.txt
	@python3 -m pip install -r requirements-test.txt
