type FormatCurrencyProps = {
  value: number;
  locale?: string;
  currency?: string;
};

export const formatCurrency = ({
  value,
  locale = 'pt-BR',
  currency = 'BRL',
}: FormatCurrencyProps) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
