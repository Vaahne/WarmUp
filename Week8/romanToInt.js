// https://leetcode.com/problems/roman-to-integer/


// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   console.log(s);
   let value = 0 ; 
//    console.log(s.charAt(0));
   if(s.length==1){
       value = callMe(s);
   }else {
        for(let i=0 ;i<s.length;i++){
            if(callMe(s.charAt(i))<callMe(s.charAt(i+1))){
                value += callMe(s.charAt(i+1))-callMe(s.charAt(i));
                i++;
            }else{
                 value +=  callMe(s.charAt(i))
            }

        }
   }
   console.log(value);
};
function callMe(s){
    let roman = ['I','V','X','L','C','D','M'];
    let vals = [1,5,10,50,100,500,1000];
    for(let i =0 ;i<roman.length;i++){
        if(s == roman[i])
            return vals[i];
    }
}
romanToInt('MCMXCIV')
