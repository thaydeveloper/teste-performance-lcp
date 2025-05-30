/**
 * Formata um número para o formato de moeda brasileira (BRL)
 * @param {number} price - O valor a ser formatado
 * @returns {string} O valor formatado em reais (R$)
 * @example
 * formatPriceBRL(1234.56) // retorna "R$ 1.234,56"
 */
const formatPriceBRL = (price: number) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export default formatPriceBRL;
