import {sum, reversStr} from './index.js'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


describe('test for function reversStr', ()=>{
  it('positive result, str = string', ()=>{
    expect(reversStr('abcd')).toBe('dcba')
  }),

  it('negative result, str != string', ()=>{
    expect(reversStr(123)).toBe(`123 - не является строкой`)
  })

})