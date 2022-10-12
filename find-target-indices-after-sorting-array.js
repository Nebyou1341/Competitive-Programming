/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let sorting = function(arr) {
    for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}       
}
var targetIndices = function(nums, target) {
    let output = []
     sorting(nums)
    for(let i = 0; i < nums.length; i++){ 
      if((nums[i] == target)) {
          output.push(i)
      }
        else {
            output = output
        }
    }
 return output
};
