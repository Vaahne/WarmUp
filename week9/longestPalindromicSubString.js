var longestPalindrome = function(s) {
  let temp = s.split("");
//   console.log(temp);
  do{
    // console.log(temp);
    let temp1 = temp.join("");
    if(temp1 == [...temp].reverse().join(""))
        return temp1;
    temp.pop();
  } while(temp.length>0); 
};

console.log(longestPalindrome("daadaadsa"));