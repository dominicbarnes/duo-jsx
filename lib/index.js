var react = require('react-tools');
var debug = require('debug')('duo-jsx');

module.exports = function plugin (opts) {
    
    opts = opts || {};

    return function transformer (file) {

        if (!file.type.match(/jsx?/)) return;

        debug('transforming: %s to js', file.id);

        file.src = react.transform(file.src, opts);

        file.type = 'js';
    };
};
