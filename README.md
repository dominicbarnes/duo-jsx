# duo-jsx

A [react-tools](https://github.com/facebook/react) plugin for [duo](https://github.com/duojs/duo).

## install

```sh
$ npm install --save-dev duo-jsx
```

## examples


### cli
```sh
$ duo -u duo-jsx example.jsx > example.js
```

### node.js

```js
var Duo = require('duo');
var jsx = require('duo-jsx');
var duo = new Duo(__dirname);

duo.entry('example.jsx').use(jsx()).run(function (err, src) {
    /* do something with the output */
});
```
api
---

```js
var jsx = require('duo-jsx');
```

### jsx([options])

options: ```Object```

Options are passed to react-tools

#### options.sourceMap

Type: ```Boolean``` Default: ```false```

Append inline source map at the end of the transformed source. 

#### options.harmony

Type: ```Boolean``` Default: ```false```

Enable ES6 features.

#### options.filename

Type: ```string``` Default: ```source.js```

The output filename for the source map.
