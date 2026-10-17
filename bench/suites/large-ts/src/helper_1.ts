export interface Model1 {
  id: string;
  count: number;
  tags: string[];
}

export function computeMetric1(input: number): number {
  return input * 2 + 7;
}
