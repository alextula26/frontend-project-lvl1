#!/usr/bin/env node
import { greetingGame, greetingUser, calc } from '../src/index.js';

const userName = greetingGame();
console.log(greetingUser(userName));
const message = 'What is the result of the expression?';
console.log(calc(userName, message, 3));
