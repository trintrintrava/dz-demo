const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function filterValidDates(arr) {
  return arr
    .map(x => x.replace(/\//g,"-"))
    .filter(x => {
      const [day, month, year] = x.split("-").map(x => Number(x));
      if (!day || !month || !year) return false;
      const date = new Date(year, month-1, day);
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
  })
}

console.log(filterValidDates(arr));