import { rotateRight, ListNode } from '../src/RotateList';

describe('RotateList', () => {
  // const toArray = (node: ListNode) => {
  //   let next = node;
  //   const arr = [node.val];

  //   while (next.next) {
  //     arr.push(next.next.val);
  //     next = next.next;
  //   }

  //   return arr;
  // };

  const toList = (nums: number[]) => {
    const head = new ListNode(nums[0], null);
    let next = head;
    for (let i = 1; i < nums.length; i++) {
      next.next = new ListNode(nums[i], null);
      next = next.next;
    }

    return head;
  };
  it('Example 1', () => {
    const inputArr = [1, 2, 3, 4, 5];
    let head = toList(inputArr);
    const k = 2;
    const outputArr = [4, 5, 1, 2, 3];
    const output = toList(outputArr);

    expect(rotateRight(head, k)).toEqual(output);
  });

  it('Example 2', () => {
    const inputArr = [0, 1, 2];
    let head = toList(inputArr);
    const k = 4;
    const outputArr = [2, 0, 1];
    const output = toList(outputArr);

    expect(rotateRight(head, k)).toEqual(output);
  });

  it('Example 3', () => {
    const inputArr: number[] = [];
    let head = toList(inputArr);
    const k = 1;
    const outputArr: number[] = [];
    const output = toList(outputArr);

    expect(rotateRight(head, k)).toEqual(output);
  });

  it('Example 4', () => {
    const inputArr: number[] = [1, 2, 3];
    let head = toList(inputArr);
    const k = 2000000000;
    const outputArr: number[] = [2, 3, 1];
    const output = toList(outputArr);

    expect(rotateRight(head, k)).toEqual(output);
  });
});
