function sort(list){
  //list.sort();
  //return list;

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j+1]){
        let param = list[j];
        list[j] = list[j+1];
        list[j+1]= param;
      }
    }
  }

  return list;

}