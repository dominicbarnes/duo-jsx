var Duo = require('duo');
var jsx = require('../lib');
var test = require('tape');

var file = "React.render(<span/>, document.querySelector('body'));";

test('Testing plugin', function (t) {
    t.plan(6);

    // should compile jsx without errors
    var duo = new Duo(__dirname);
    duo.entry(file, 'jsx').use(jsx()).run(function (err, src) {
        t.error(err, 'should compile .jsx');
        t.ok(src.code.match('createElement'), 'confirm transformation');
    });

    // should compile js without errors
    duo.entry(file, 'js').use(jsx()).run(function (err, src) {
        t.error(err, 'should compile .js');
        t.ok(src.code.match('createElement'), 'confirm transformation');
    });

    //should skip non-jsx
    duo.entry(file, 'css').use(jsx()).run(function (err, src) {
        t.error(err, 'should skip css');
        t.ok(src.code.match('<span/>'), 'confirm skip');
    });
});
