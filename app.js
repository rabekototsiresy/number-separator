const format = num => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')

const addSpace = n => format(n).split(',').join(' ')
module.exports = addSpace;