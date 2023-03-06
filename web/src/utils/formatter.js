const formatToMoneyPtBr = (money) => money.toLocaleString('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

export default formatToMoneyPtBr;
