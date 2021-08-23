import { multiplyByTwo } from '../src/index';

describe('multiplyByTwo factor', () => {
  it('should multiply by two', () => {
    const result = multiplyByTwo(10);

    expect(result).toBe(20);
  });
});
