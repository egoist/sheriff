const fs = require('fs')
// https://cdn.rawgit.com/iamcal/emoji-data/19299c91/emoji.json
const source = require('./emoji-source')

const emoji = source.map(e => ({
  name: (e.name ? e.name : e.short_name.replace(/_/g, ' ')).toLowerCase(),
  emoji: e.unified.split('-').map(v => String.fromCodePoint(`0x${v}`)).join('')
}))

fs.writeFileSync('./emoji.json', JSON.stringify(emoji), 'utf8')
