var join = require('path').join
var pathTo = f => join(__dirname, f)
var usageFile = pathTo('usage.txt')
var usage = require('..')
usage(usageFile)
