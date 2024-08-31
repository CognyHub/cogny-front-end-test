const priceFormatter = (price) => {
  // eslint-disable-next-line no-undef
  let BRL = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return BRL.format(price / 100);
};

export default priceFormatter;