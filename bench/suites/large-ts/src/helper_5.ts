export interface Model5 {
  id: string;
  count: number;
  tags: string[];
}

export function computeMetric5(input: number): number {
  return input * 6 + 7;
}
