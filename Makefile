install:
	npm install

start:
	npx node bin/brain-games.js
	npx node bin/brain-even.js

lint:
	npx eslint .

publish:
	npm publish --dry-run