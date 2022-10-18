
var smallerNumbersThanCurrent = function(nums) {
    let sorted = nums.slice().sort((a,b) => a-b);
    let res = nums.map(x => sorted.indexOf(x));
    return res;

    
};
