install:
	npm install

start:
	npx node src/bin/brain-games.js
	npx node src/bin/brain-even.js
	npx node src/bin/brain-calc.js
	npx node src/bin/brain-gcd.js
	npx node src/bin/brain-progression.js
	npx node src/bin/brain-prime.js

lint:
	npx eslint .

publish:
	npm publish --dry-run