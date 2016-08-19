module.exports = function (pathToUsageFile, code) {
  if (!code) code=1
  function quit () {
    process.exit(code)
  }
  var read = require('fs').createReadStream
  var readS = read(pathToUsageFile)
  readS.pipe(process.stdout)
  readS.on('end', quit)
  return
}
