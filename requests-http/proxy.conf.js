const { debug } = require("console");

const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8000/',
    secure: false,
    loglevel: debug,
    pathRewrite: {'^/api': ''}
  }
];

module.exports = PROXY_CONFIG;
