const emojis = require('./emoji')

const sheriff = (emoji, name) => {
  // const spaces = ' '.repeat([...emoji].filter(v => v === '').length)
  const spaces = ' '.repeat([...emoji].filter(v => v.charCodeAt(0) === 65039).length)
  return `⠀ ⠀ ⠀     🤠
  　    ${emoji}${spaces}${emoji}${spaces}${emoji}
      ${emoji}${spaces}  ${emoji}　${spaces}${emoji}
     👇  ${emoji}${spaces}${emoji}${spaces} 👇
    　  ${emoji} ${spaces} ${emoji}
  　   ${emoji}  ${spaces}  ${emoji}
  　   👢     👢
  howdy. i'm the sheriff of ${name}
  `
}

/**
 * Get random integer
 * @param {Number} min Minimal integer, inclisive
 * @param {Number} max Maxium integer, exclusive
 */
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min)

exports.random = () => {
  const index = randomInt(0, emojis.length)
  const { name, emoji } = emojis[index]
  return sheriff(emoji, name)
}

exports.emoji = emoji => {
  const found = emojis.find(e => e.emoji === emoji)
  return found && sheriff(found.emoji, found.name)
}
