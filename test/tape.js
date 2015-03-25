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
    t.plan(6);

    // should compile jsx without errors
    var duo = new Duo(__dirname);
    duo.entry(file, 'jsx')
    duo.use(jsx())
    duo.run(function (err, src) {
        t.error(err, 'should compile .jsx');
        t.ok(src.code.match('createElement'), 'confirm output');
    });

    // should compile js without errors
    duo.entry(file, 'js')
    duo.use(jsx())
    duo.run(function (err, src) {
        t.error(err, 'should compile .js');
        t.ok(src.code.match('createElement'), 'confirm output');
    });

    //should skip non-jsx
    duo.entry(file, 'css')
    duo.use(jsx())
    duo.run(function (err, src) {
        t.error(err, 'should skip css');
        t.ok(src.code.match('<span>'), 'confirm output');
    });
});
