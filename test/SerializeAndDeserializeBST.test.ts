import {
  serialize,
  deserialize,
  TreeNode
} from '../src/SerializeAndDeserializeBST';

describe('SerializeAndDeserializeBST', () => {
  it('Example 1', () => {
    const tree = new TreeNode(
      2,
      new TreeNode(1, null, null),
      new TreeNode(3, null, null)
    );

    const ser = serialize(tree);
    expect(ser).toEqual('2,1,3,');

    expect(deserialize(ser)).toEqual(tree);
  });

  it('Example 2', () => {
    expect(deserialize(serialize(null))).toEqual(null);
  });
});
