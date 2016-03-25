function add1(number) {
    if (typeof number === 'number') {
        return number + 1;
    }
    throw "The 'number' given was not a number";
}

module.exports = add1;
