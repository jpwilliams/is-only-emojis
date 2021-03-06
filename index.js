const emojiRegex = require('emoji-regex/text')

function isOnlyEmojis (message) {
  if (!message) return true

  const noEmojis = message.replace(emojiRegex(), '')
  const noSpace = noEmojis.replace(/[\s\n]/gm, '')

  return !noSpace
}

module.exports = isOnlyEmojis
