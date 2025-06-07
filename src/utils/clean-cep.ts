export function cleanCep(cep: string) {
  if (!cep) return "";
  const formatCep = cep.replace(/[^\d]/g, "");
  return Number(formatCep);
}
