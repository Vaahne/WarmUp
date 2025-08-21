var removeDuplicates = function(nums) {    
    let unique = [];

    for(let i =0 ;i<nums.length;i++){
        if(unique.includes(nums[i]))
            nums[i]= '_';
        else 
            unique.push(nums[i]);
    }
    console.log(unique);
    for(let i=0;i<nums.length;i++){
        if(i<unique.length)
            nums[i]=unique[i];
        else
            nums[i] = '_';
    }
    return unique.length;
};

let x = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
console.log(x);



// let k = 1;
// let nums =  [0,0,1,1,1,2,2,3,3,4];
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//         nums[k] = nums[i];
//         k++;
//     }
// }

// console.log(k);

// console.log(nums);