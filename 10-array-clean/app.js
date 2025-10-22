function filterArr(arr, func){
  let output = [];
  for (let el of arr){
    if (!func(el)){
      output.push(el)    
    } 
  }
  return output;
}

console.log(filterArr([3, 6, 9, 2], x => x>5));