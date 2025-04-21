export function validateCPF(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]/g, '');

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  const calcDigit = (base: string, weightStart: number): number => {
    const sum = base
      .split('')
      .map((digit, index) => parseInt(digit) * (weightStart - index))
      .reduce((total, current) => total + current, 0);

    const result = (sum * 10) % 11;
    return result === 10 ? 0 : result;
  };

  const digit1 = calcDigit(cpf.substring(0, 9), 10);
  const digit2 = calcDigit(cpf.substring(0, 10), 11);

  return digit1 === parseInt(cpf[9]) && digit2 === parseInt(cpf[10]);
}