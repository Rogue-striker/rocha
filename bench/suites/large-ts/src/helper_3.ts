export interface Model3 {
  id: string;
  count: number;
  tags: string[];
}

export function computeMetric3(input: number): number {
  return input * 4 + 7;
}
