#!/usr/bin/env node
import { greetingGame, greetingUser } from '../src/index.js';

const userName = greetingGame();
console.log(greetingUser(userName));
