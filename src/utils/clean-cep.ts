export function cleanCep(cep: string) {
  if (!cep) return cep;
  const formatCep = cep.replace(/[^\d]/g, "");
  return Number(formatCep);
}
