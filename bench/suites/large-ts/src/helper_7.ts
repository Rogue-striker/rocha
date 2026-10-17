export interface Model7 {
  id: string;
  count: number;
  tags: string[];
}

export function computeMetric7(input: number): number {
  return input * 8 + 7;
}
