function isValidCard(cardNumber) {
  // убираем пробелы и дефисы
  const digits = cardNumber.replace(/[\s-]/g, '');

  // проверяем, что только цифры
  if (!/^\d+$/.test(digits)) return false;

  let sum = 0;
  let shouldDouble = false;

  // идём с конца к началу
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i], 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}
