var existy = require('./existy.js');
function truthy (x) {
    return (x !== false) && existy(x)
}

module.exports = truthy;
