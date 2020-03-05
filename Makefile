install:
	npm install

start:
	npx node bin/brain-games.js

lint:
	npx eslint .

publish:
	npm publish --dry-run