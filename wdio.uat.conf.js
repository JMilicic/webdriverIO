
//merge parent conf object + add new changes in uat (baseURL, connection timeout)
const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')

exports.config = merge(wdioConf.config, {

baseUrl: 'http://rahulshettyacademyUAT.com',
waitforTimeout: 5000


})