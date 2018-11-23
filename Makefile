build:
	npm --version
	node --version
	# Pin the npm version to 6.4.1
	# Using npx is a workaround for npm<5.6 not being able to self update
	# See: https://github.com/ipfs/ci-websites/issues/3
	npx npm@5.6 i -g npm@6.4.1
	npm install
	npm run lint
	npm run build
