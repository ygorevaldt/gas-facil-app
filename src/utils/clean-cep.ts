export function cleanCep(cep: string) {
  if (!cep) return 0;
  const formatCep = cep.replace(/[^\d]/g, "");
  return Number(formatCep);
}
