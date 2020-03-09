#!/usr/bin/env node
import { greetingGame, greetingUser, even } from '../src/index.js';

const userName = greetingGame();
console.log(greetingUser(userName));
const message = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(even(userName, message, 3));
