/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num=0;
    let originalNum =x;
    do{
        let r = x%10;
        x = Math.floor(x/10);
        num = num*10+r;
    }while(x>0);
    
    // console.log(num);
    if(num == originalNum){
        return true;
    }
    return false;
};

console.log(isPalindrome(12121))