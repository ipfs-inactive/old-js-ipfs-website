build:
	npm --version
	node --version
	npm install
	npm run lint
	npm run build
	npm run test:e2e:ci
