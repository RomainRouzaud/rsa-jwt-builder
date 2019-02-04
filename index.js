const fs = require('fs')
const nJwt = require('njwt')
const path = require('path')

var claims = {
  'sub': process.argv[3]
}

var contents = fs.readFileSync(path.resolve(__dirname, process.argv[2]), 'utf8')

var jwt = nJwt.create(claims, contents, 'RS512')
jwt.setExpiration(new Date().getTime() + (3 * 60 * 1000))
var token = jwt.compact()

console.log(token)
