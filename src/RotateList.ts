export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (k === 0) {
    return head;
  }

  let list = [];
  let next = head;

  while (next !== null) {
    list.push(next);
    next = next!.next;
  }
  const len = list.length;

  if (len > 1) {
    let moves = k;
    if (k > len * 2) {
      moves = k % len;
    }
    for (let i = 0; i < moves; i++) {
      const popped: ListNode = list.pop()!;
      list.unshift(popped);
      list[0]!.next = list[1];
      list[list.length - 1]!.next = null;
    }
  }

  return list.length > 0 ? list[0] : head;
}
