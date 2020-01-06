# is-only-emojis

[![Greenkeeper badge](https://badges.greenkeeper.io/jpwilliams/is-only-emojis.svg)](https://greenkeeper.io/)

Returns whether a string contains only emojis or not.

``` js
const isOnlyEmojis = require('is-only-emojis')

isOnlyEmojis('') // true
isOnlyEmojis('  😲 -> 😎') // false
isOnlyEmojis('\n❤️ 🚗') // true
isOnlyEmojis('Coming 🔜') // false
```
