install:
	npm install

start:
	npx node src/bin/brain-games.js

brain-even:
	npx node src/bin/brain-even.js

brain-calc:
	npx node src/bin/brain-calc.js

brain-gcd:
	npx node src/bin/brain-gcd.js

brain-progression:
	npx node src/bin/brain-progression.js

brain-prime:
	npx node src/bin/brain-prime.js

lint:
	npx eslint .

publish:
	npm publish --dry-run