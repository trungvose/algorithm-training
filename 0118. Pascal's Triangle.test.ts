import { generate } from "./0118. Pascal's Triangle"
describe('118. Pascal Triangle', () => {
  it('should pass the first test case', () => {
    expect(generate(5)).toStrictEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ])
  })
})
