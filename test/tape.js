var Duo = require('duo');
var jsx = require('../lib/index');
var test = require('tape');

var file = "var Class = React.createClass({  \n" +
           "    render: function () {        \n" +
           "        return (                 \n" +
           "            <span>testing</span> \n" +
           "        );                       \n" +
           "    }                            \n" +
           "});                              \n" ;

test('Testing plugin', function (t) {
    t.plan(7);

    // should compile a sring without errors
    var duo0 = new Duo(__dirname);
    duo0.entry(file, 'jsx')
    duo0.use(jsx())
    duo0.run(function (err, src) {
        t.error(err, 'should compile .jsx');
        t.equal(typeof src.code, 'string');
        t.ok(src.code.match('createElement'), 'confirm output');
    });

    // should compile a sring without errors
    var duo0 = new Duo(__dirname);
    duo0.entry(file, 'js')
    duo0.use(jsx())
    duo0.run(function (err, src) {
        t.error(err, 'should compile .js');
        t.ok(src.code.match('createElement'), 'confirm output');
    });
    
    //should skip non-jsx
    var duo2 = new Duo(__dirname);
    duo2.entry(file, 'css')
    duo2.use(jsx())
    duo2.run(function (err, src) {
        t.error(err, 'should skip css');
        t.ok(src.code.match('<span>'), 'confirm output');
    });
});
