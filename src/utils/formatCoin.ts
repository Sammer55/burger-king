const formatCoin = (valor: number) => {
  const coinOptions = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return valor.toLocaleString("pt-BR", coinOptions);
};

export default formatCoin;
