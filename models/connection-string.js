const url = require('url')

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cinema';
if (!uri) {
  throw new Error(
    '\033[31mYou need to provide the connection string. ' +
    'You can open "models/connection-string.js" and export it or use the "setUri" command.\033[0m'
  );
}

var uriObj = url.parse(uri)
if (uriObj.protocol !== 'mongodb:') {
  throw new Error('Must be a mongodb URI')
}
if (!uriObj.host || !uriObj.path) {
  throw new Error('Improperly formatted URI')
}

module.exports = uri;

