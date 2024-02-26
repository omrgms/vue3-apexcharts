export const formatCurrency = (value, currency) => {
    const val = (value / 1).toFixed(2);
    const formattedValue = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return currency + '' + formattedValue;
}