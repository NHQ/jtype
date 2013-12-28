var alpha = require('./');

var styles = {}
styles.fontFamily = 'Georgia';
styles.fontSize = '30px'
var dict = alpha()

console.log(dict)

var stringDict = alpha('king of infinite space', styles)

console.log(stringDict)
