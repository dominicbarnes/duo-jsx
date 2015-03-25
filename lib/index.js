var react = require('react-tools');
var debug = require('debug')('duo-jsx');

module.exports = function plugin (opts) {

    opts = opts || {};

    return function transformer (file) {

        if (file.type !== 'jsx' && file.type !== 'js') return;

        debug('Transforming %s to JS', file.id);

        file.src = react.transform(file.src, opts);

        file.type = 'js';
    };
};
