function getPercentage(total: number, fraction: number, asPercent: boolean = false): number | string {
  const value: number = fraction * 100 / total;

  return asPercent ? `${value}%` : value;
}

export default getPercentage;