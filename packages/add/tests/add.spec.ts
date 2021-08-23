import { add } from '../src/add';

describe('add function', () => {
  it('should add two number together', () => {
    const result = add(10, 5);

    expect(result).toBe(15);
  });
});
