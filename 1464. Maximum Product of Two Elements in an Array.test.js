import maxProduct from "./1464. Maximum Product of Two Elements in an Array"

test('Expect the result of maxProduct is equal to the test case', () => {
    expect(maxProduct([3, 4, 5, 2])).toBe(12);
    expect(maxProduct([1, 5, 4, 5])).toBe(16);
    expect(maxProduct([3, 7])).toBe(12);
})
