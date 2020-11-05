import canMakeArithmetic from './1502. Can Make Arithmetic Progression From Sequence'
test('Expect the result of maxProduct is equal to the test case', () => {
  expect(canMakeArithmetic([3, 5, 1])).toBe(true)
  expect(canMakeArithmetic([1, 2, 4])).toBe(false)
})
