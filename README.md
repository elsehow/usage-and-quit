# usage-and-quit

read a usage file to process.stdout, and quit with some exit code

## example

```javascript
var join = require('path').join
var pathTo = f => join(__dirname, f)
var usageFile = pathTo('usage.txt')
var usage = require('..')
usage(usageFile)
```

## install

```
npm install usage-and-quit
```

## api
### usage(pathToUsageFile, [exitCode])

will print `pathToUsageFile` to stdout.

`exitCode` is 1 by default.

## license

BSD
