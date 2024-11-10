function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currentCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            currentCurrency = item;
        }
    }
    return sumUAH / currentCurrency.value;
}

console.log(exchange(100000, [{currency: 'USD', value: 16}, {currency: 'EUR', value: 32}], 'USD'))