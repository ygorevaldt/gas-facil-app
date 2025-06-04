export function formatPhoneNumber(input: string): string {
  const digits = input.replace(/\D/g, "");

  if (digits.length >= 11) {
    const ddd = digits.slice(-11, -9);
    const number = digits.slice(-9);
    return `(${ddd}) ${number[0]} ${number.slice(1, 5)}-${number.slice(5)}`;
  }

  if (digits.length === 9) {
    return `${digits[0]} ${digits.slice(1, 5)}-${digits.slice(5)}`;
  }

  if (digits.length === 8) {
    return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  }

  return input;
}
