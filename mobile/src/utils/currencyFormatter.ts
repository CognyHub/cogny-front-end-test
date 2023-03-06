type FormatCurrencyProps = {
  value: number;
  locale?: string;
  currency?: string;
};

export const currencyFormatter = ({
  value,
  locale = 'pt-BR',
  currency = 'BRL',
}: FormatCurrencyProps): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
