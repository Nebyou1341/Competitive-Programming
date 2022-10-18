
var numIdenticalPairs = function(nums) {
   let result=0
   for(let i=0;i<nums.length-1;i++){
      for(let j=i+1;j<nums.length;j++){
         if(nums[i]===nums[j])result++
      }
   }
   return result


const numIdenticalPairs=nums=>{
   let map=new Map()
   let count=0
   for(let x of nums){
      map.set(x,map.get(x)+1 ||0)
      count+=map.get(x)
   }
   return count
}
};
