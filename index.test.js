const {add, multiply, subtract, divide, power} = require("./")

test('adding', () => {
    expect(add(2, 3)).toBe(5);
});

test('multiplying', () => {
    expect(multiply(2, 4)).toBe(8);
});

test('subtracting', () => {
    expect(subtract(10, 2)).toBe(8);
});

test('dividing', () => {
    expect(divide(16, 4)).toBe(4);
});

test('power', () => {
    expect(power(2, 4)).toBe(16);
});
