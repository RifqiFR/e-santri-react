export const formatNumberToRupiah = (money) => {
  if (!money) return null;

  return new Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
  ).format(money);
};