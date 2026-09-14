export function formatarPreco(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function calcularDesconto(precoAtual: number, precoOriginal: number): string {
  if (!precoOriginal || precoOriginal <= 0) return "";
  const desconto = Math.round((1 - precoAtual / precoOriginal) * 100);
  return `${desconto}% OFF`;
}