var assert = require('assert');
var add1 = require('./index.js')

suite('add-1-to-a-number', function () {
    test('add 1 to 1', function () {
        assert.equal(2, add1(1));
    });
    test('add 1 to 1051', function () {
        assert.equal(1052, add1(1051));
    });
    test('add 1 to 2.4', function () {
        assert.equal(3.4, add1(2.4));
    });
    test("add 1 to 'left-pad'", function () {
        assert.throws(function() {
            add1('left-pad');
        }, "The 'number' given was not a number");
    });
    test('add 1 to true', function () {
        assert.throws(function () {
            add1(true);
        }, "The 'number' given was not a number");
    });
    test('add 1 to null', function () {
        assert.throws(function () {
            add1(null);
        }, "The 'number' given was not a number");  
    });
    test('add 1 to Infinity', function () {
        assert.equal(Infinity, add1(Infinity));
    });
});
