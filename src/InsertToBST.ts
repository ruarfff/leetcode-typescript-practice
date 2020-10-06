export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function insertIntoBST(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  if (root === null) {
    return new TreeNode(val, null, null);
  }

  if (root.val < val) {
    if (root.right === null) {
      root.right = new TreeNode(val, null, null);
    } else {
      insertIntoBST(root.right, val);
    }
  } else {
    if (root.left === null) {
      root.left = new TreeNode(val, null, null);
    } else {
      insertIntoBST(root.left, val);
    }
  }
  return root;
}
