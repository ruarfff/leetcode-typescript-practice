import { buddyStrings } from '../src/BuddyStrings';

describe('BuddyStrings', () => {
  it('Example 1', () => {
    const A = 'ab';
    const B = 'ba';
    expect(buddyStrings(A, B)).toBe(true);
  });
  it('Example 2', () => {
    const A = 'ab';
    const B = 'ab';
    expect(buddyStrings(A, B)).toBe(false);
  });
  it('Example 3', () => {
    const A = 'aa';
    const B = 'aa';
    expect(buddyStrings(A, B)).toBe(true);
  });
  it('Example 4', () => {
    const A = 'aaaaaaabc';
    const B = 'aaaaaaacb';
    expect(buddyStrings(A, B)).toBe(true);
  });
  it('Example 4', () => {
    const A = '';
    const B = 'aa';
    expect(buddyStrings(A, B)).toBe(false);
  });
});
