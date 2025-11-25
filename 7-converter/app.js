function converter(sum, fromCurrency, toCurrency) {
  let rubToUsd = 0.013;
  let usdToRub = 79.08;
  let rubToEur = 0.011;
  let EurToRub = 91.9;

    switch (fromCurrency) {
        case "rub":
            switch (toCurrency) {
                case "usd":
                    return sum * rubToUsd;
                case "eur":
                    return sum * rubToEur;
                default:
                    return null;
            }
        case "usd":
            switch (toCurrency){
                case "rub":
                    return sum * usdToRub;
                default:
                    return null;
            }
        case "eur":
            switch (toCurrency){
                case "rub":
                    return sum * EurToRub;
                default:
                    return null;
            }
        default:
            return null;
    }

}