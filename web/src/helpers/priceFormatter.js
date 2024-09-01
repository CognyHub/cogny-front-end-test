const priceFormatter = (price) => {
  const BRL = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return BRL.format(price / 100);
};

export default priceFormatter;
