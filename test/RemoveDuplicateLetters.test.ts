import { removeDuplicateLetters } from '../src/RemoveDuplicateLetters';

describe('RemoveDuplicateLetters', () => {
  it('Example 1', () => {
    const input = 'bcabc';
    const output = 'abc';

    expect(removeDuplicateLetters(input)).toEqual(output);
  });

  it('Example 2', () => {
    const input = 'cbacdcbc';
    const output = 'acdb';

    expect(removeDuplicateLetters(input)).toEqual(output);
  });

  it('Example 3', () => {
    const input = 'abcd';
    const output = 'abcd';

    expect(removeDuplicateLetters(input)).toEqual(output);
  });
});
