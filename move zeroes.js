var nums = [0, 1, 0, 3, 12];
    var moveZeroes = function(nums) {
        for (let i = nums.length - 1; i >= 0; i--) {
            let num = nums[i];
            if (!num) {
                nums.splice(i, 1);
                nums.push(0);
            }
        }
    };
