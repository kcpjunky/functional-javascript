var _ = require('underscore');
var letters = ['a', 'b', 'c'];

/**
 * check whether data can be indexed
 * @param data
 */
function isIndexed(data) {
    return _.isArray(data) || _.isStrind(data);
}




function naiveNth(a, index) {
    if (!_.isNumber(index) ) {
        fail("index must be a Number");
    }

    if (!isIndexed(a)) {
        fail("インデックス指定可能でないデータはサポートされていません");
    
    }
    if ((index < 0) || (index > a.length - 1)) {
        fail("範囲外");
    }
    return a[index];
}
naiveNth(letters, 1);

function second(a) {
    return nth(a, 1);
}

