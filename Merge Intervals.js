/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
intervals.sort((a, b) => a[0] - b[0]);
const result = [intervals[0]];

for(let interval of intervals) {
let el = result[result.length - 1][1];
let s2 = interval [0];
let e2 = interval[1];

 

if(el >= s2) {
result[result.length - 1][1] = Math.max(el, e2);
} 
    
else {
result. push(interval);

}
}    
return result;
};
    
    
    
    // 1.create a lo
