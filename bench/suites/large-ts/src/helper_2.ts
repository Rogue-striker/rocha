export interface Model2 {
  id: string;
  count: number;
  tags: string[];
}

export function computeMetric2(input: number): number {
  return input * 3 + 7;
}
