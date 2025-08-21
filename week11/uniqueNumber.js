
var singleNumber1 = function(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
        console.log(result);
    }
    return result;
};
// ma sol
var singleNumber4 = function(nums) {
    for (let i =0; i<nums.length; i++){
        let x = nums[i]
        const matchingNums = nums.filter(num => num === x)
        if (matchingNums.length > 1){
            console.log('Double Numbers')
        }  else {
          return x;
        }
    }
};
// Dylan Solution
var singleNumber2 = function(nums) {
    if(nums.length == 1) return nums[0];

    for(let i = 0; i < nums.length; i++){
        if(nums.lastIndexOf(nums[i]) === nums.indexOf(nums[i])) return nums[i]
    }
};

// Igor sol

var singleNumber3 = function(nums) {
    nums.sort();
    for (let i=0; i<nums.length-1;i++){
        if (nums[i]==nums[i+1]){
             i++;
        } else {
            return nums[i];
        }
    }
    return nums [nums.length-1];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let unique = [];
    for(let i =0 ;i<nums.length;i++){     
        if(!unique.includes(nums[i])  ){
            unique.push(nums[i]);
        }
        if(nums.indexOf(nums[i])<i && unique.includes(nums[i]))
            unique.splice(unique.indexOf(nums[i]),1);
    }
    return unique;
};


let u = singleNumber([4,1,2,1,2]);
console.log("Result ",u);