var findMedianSortedArrays = function(nums1, nums2) {
    
    let num3 = [...nums1,...nums2].sort((a,b)=>a-b);
    let length = num3.length;

    console.log(`${length} and ${num3}`);

    if(length%2!=0)
        return num3[Math.floor(length/2)];
    else{
        let m = num3[length/2] + num3[length/2-1];
        return (m/2);
    }
};

console.log(findMedianSortedArrays([1,2,3,4,5],[6,7,8,9,10,11,12,13,14,15,16,17]));