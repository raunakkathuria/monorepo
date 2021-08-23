import { multiplyByTwo } from '@monoservice/utils';

export const add = (a: number, b: number) => {
  // no use here, just to show you can import from a different package
  multiplyByTwo(a);

  return a + b;
};
