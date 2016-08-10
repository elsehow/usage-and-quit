# boxels-to-dna-order

turns a 3D array of boolean values, representing [boxels](), into an order of DNA.

see [details.md](details.md)

## install

```
npm i
```

## use

```javascript
let proc = require('boxels-to-dna-order')(arr3d, __dirname + '/out', opts)
proc.on('csv', path => console.log(path))
proc.on('pdb, path => console.log(path))
proc.on('dnajson, path => console.log(path))
proc.on('cif, path => console.log(path))
```

you can select which files to generate using the following `opts`

- `csv` - True/False
- `pdb` - True/False
- `dnajson` - True/False
- `cif` - True/False

and you can listen to the events from `proc` by the same name (see code example).

## license

BSD
