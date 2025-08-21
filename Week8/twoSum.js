// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let output  = []
//     let flag= false;
//     for(let x=0;x<nums.length;x++){
        
//         for(let y=x+1;y<nums.length;y++){
//             if(nums[x]+nums[y]== target){
//                 output.push(x);
//                 output.push(y);
//                 flag=true;
//                 break;
//             }
//         }
//         if(flag)
//             break;
//     }
//     return output;
// };

// console.log(twoSum([3,2,4],6))




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sol = [];
    // let flag = false;
    for(let i=0;i<nums.length;i++){
        const val = target-nums[i];
        let temp = nums;
        // console.log(temp);
        if(temp.indexOf(val)!=-1 && temp.indexOf(val)!=i){
            sol.push(i);
            sol.push(temp.indexOf(val));
            break;
        }
    }
    return sol;
};

console.log(twoSum([3,2,4],7));