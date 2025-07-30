export function formatCurrency(value: string): string {
  const cleaned = value.replace(/\$/g, "").replace(/M/g, "");
  const num = Number(cleaned) * 1_000_000;

  if (isNaN(num)) return value;

  if (num >= 1e12) return `$${(num / 1e12).toFixed(1)}T`;
  if (num >= 1e9) return `$${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`;

  return `$${num}`;
}
