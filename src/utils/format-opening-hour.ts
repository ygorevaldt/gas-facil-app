export function formatOpeningHour(raw: number | string): string {
  const value = typeof raw === "string" ? parseFloat(raw) : raw;

  const [h, m = "0"] = value?.toString().split(".");

  const minutes = m.padEnd(2, "0").slice(0, 2);
  const formattedMinutes = minutes.padStart(2, "0");

  return `${parseInt(h, 10)}:${formattedMinutes}`;
}
