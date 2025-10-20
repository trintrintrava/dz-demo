function crypto(pass){
  let passList = pass.split("").reverse();
  passList.unshift(passList[passList.length-1]);
  return passList.join("");
}

function check(cryptoPass, pass){
  let cryptoPassList = cryptoPass.split("");
  cryptoPassList.splice(0,1);
  let finalPass = cryptoPassList.reverse().join("");
  if (!finalPass === pass){
    return false;
  }
  return true;
}