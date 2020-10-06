import { insertIntoBST, TreeNode } from '../src/InsertToBST';

xdescribe('InsertToBST', () => {
  function treeToArray(root: TreeNode | null): (number | null)[] {
    const arr: any = [];

    const serialize = (node: TreeNode | null, numbers: (number | null)[]) => {
      if (node === null || node.val === null) {
        return;
      }
      numbers.push(node.val);
      serialize(node.left, numbers);
      serialize(node.right, numbers);
    };
    serialize(root, arr);

    return arr;
  }

  function arrayToTree(arr: (number | null)[]): TreeNode | null {
    const rootNum: number = arr[0]!;
    let root: TreeNode | null = new TreeNode(rootNum);
    for (let i = 1; i < arr.length; i++) {
      const current: number = arr[i]!;
      root = insertIntoBST(root, current);
    }
    return root;
  }

  it('Example 1', () => {
    const root = [4, 2, 7, 1, 3],
      val = 5,
      output = [4, 2, 7, 1, 3, 5];
    expect(treeToArray(insertIntoBST(arrayToTree(root), val))).toEqual(output);
  });

  it('Example 2', () => {
    const root = [40, 20, 60, 10, 30, 50, 70],
      val = 25,
      output = [40, 20, 60, 10, 30, 50, 70, null, null, 25];
    expect(treeToArray(insertIntoBST(arrayToTree(root), val))).toEqual(output);
  });

  it('Example 3', () => {
    const root = [4, 2, 7, 1, 3, null, null, null, null, null, null],
      val = 5,
      output = [4, 2, 7, 1, 3, 5];
    expect(treeToArray(insertIntoBST(arrayToTree(root), val))).toEqual(output);
  });
});
