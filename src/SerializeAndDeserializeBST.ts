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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) {
    return null;
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

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
  if (root === null || root.val === null) {
    return '';
  }
  return root.val + ',' + serialize(root.left) + serialize(root.right);
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  if (data.length === 0) {
    return null;
  }
  const arr = data
    .split(',')
    .filter(v => {
      return !!v;
    })
    .map(Number);
  const size = arr.length;
  const root = new TreeNode(arr[0], null, null);
  for (let i = 1; i < size; i++) {
    insertIntoBST(root, arr[i]);
  }

  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
