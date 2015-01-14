var _ = require('underscore');
var existy = require('./existy.js');

var truthy = require('./truthy.js');

function doWhen(cond, action) {
    if (truthy(cond)) {
        return action();
    } else {
        return undefined;
    }
}

function executeIfHasField(target, name) {
    return doWhen(existy(target[name]), function() {
        var result = _.result(target, name);
        console.log(['result is', result].join(''));
        return result;
    });
}

var target = {
    "a": 12,
    "b": 3
};
var test = executeIfHasField(target, "b");
console.log("test is ", test);

var a = [null, undefined, 1, 2, false].map(existy);
console.log(a);
