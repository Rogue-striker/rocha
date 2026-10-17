export interface CalculationResult {
  operation: string;
  operands: [number, number];
  result: number;
}

export function add(a: number, b: number): CalculationResult {
  return {
    operation: 'add',
    operands: [a, b],
    result: a + b,
  };
}

export function throwSampleError(): never {
  // Line 17 is intentionally where the error is thrown
  throw new Error('Sample TS Error from calc.ts line 18');
}
