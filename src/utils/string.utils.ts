/**
 * Normaliza uma string para uso em IDs HTML ou URLs
 * Remove acentos, converte para minúsculas, substitui espaços por hífens e remove caracteres especiais
 *
 * @param text String a ser normalizada
 * @returns String normalizada
 */
export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w-]/g, '');
};
