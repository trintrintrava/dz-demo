function toQueryString(params) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

const query = { 
    search: 'Вася', 
    take: 10 
};
console.log(toQueryString(query)); 