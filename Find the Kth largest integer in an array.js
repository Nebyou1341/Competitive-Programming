
var kthLargestNumber = function(nums, k) {
    nums.sort((a,b) => {return a-b})
    return nums[nums.length-k]
};
