export interface Model4 {
  id: string;
  count: number;
  tags: string[];
}

export function computeMetric4(input: number): number {
  return input * 5 + 7;
}
