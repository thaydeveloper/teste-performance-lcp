/**
 * Compara dois pacotes de dados para ordenação
 * @param {string} a - Primeiro pacote a ser comparado (ex: '5GB', 'ilimitado')
 * @param {string} b - Segundo pacote a ser comparado (ex: '5GB', 'ilimitado')
 * @returns {number} Retorna:
 *  - 1 se o pacote 'a' for 'ilimitado'
 *  - -1 se o pacote 'b' for 'ilimitado'
 *  - A diferença numérica entre os pacotes (ex: 5GB - 3GB = 2)
 */
const comparePackages = (a: string, b: string) => {
  if (a.toLowerCase() === 'ilimitado') return 1;
  if (b.toLowerCase() === 'ilimitado') return -1;

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  return numA - numB;
};

export default comparePackages;
