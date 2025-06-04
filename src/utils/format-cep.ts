export function formatCep(cep: string | number): string {
  const cleanCep = String(cep).replace(/\D/g, "");

  if (cleanCep.length !== 8) return cleanCep;
  return cleanCep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
}
