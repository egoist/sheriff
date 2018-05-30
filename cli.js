#!/usr/bin/env node
const sheriff = require('.')

const args = process.argv.slice(2)

const emoji = args[0]

if (emoji) {
  console.log(sheriff.emoji(emoji))
} else {
  console.log(sheriff.random())
}
