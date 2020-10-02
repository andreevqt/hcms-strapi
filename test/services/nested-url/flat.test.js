'use strict'

const {flat} = require(`../../../api/nested-url/services/nested-url`);

describe('flat', () => {
  test('should up children', () => {
    const input = {
      id: 1,
      children: [{
        id: 2,
        parent: 1,
        children: [{
          id: 3,
          parent: 2
        }]
      }]
    };
    const flatten = [{id: 2}, {id: 3}];
    const result = flat(input);
    expect(result).toEqual(flatten);
  });
});
