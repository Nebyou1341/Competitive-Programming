var pivotIndex = function(arr) {
    var len = arr.length;
    var sumLeft = 0;
    var sum = arr.reduce((a, b) => a + b, 0);
    for (var i = 0; i < len; i++) {
        sumLeft += arr[i];
        if (sumLeft === sum - sumLeft + arr[i]) {
            return i;
        }
    }
    return -1;
};
