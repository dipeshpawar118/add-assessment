const add = require('./index'); // Import the function

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number itself if only one number is provided', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
});

test('returns the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
    expect(add("10,20")).toBe(30);
});

test('handles multiple numbers correctly', () => {
    expect(add("1,2,3,4")).toBe(10);
    expect(add("3,6,9,12")).toBe(30);
});

test('handles whitespace correctly', () => {
    expect(add(" 1 , 2 , 3 ")).toBe(6);
});

test('handles non-numeric values by treating them as 0', () => {
    expect(add("1,a,3")).toBe(4);
    expect(add("2,abc,5")).toBe(7);
});

test('throws an error for negative numbers', () => {
    expect(() => add("-1,-2,-3")).toThrow("Negative numbers not allowed: -1, -2, -3");
    expect(() => add("-10,5")).toThrow("Negative numbers not allowed: -10");
});


test('handles new line as a delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n3")).toBe(6);
    expect(add("1,2\n3,4")).toBe(10);
});
