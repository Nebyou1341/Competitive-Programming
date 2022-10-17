var nextGreaterElement = function(nums1, nums2) {
	const map = {}
	const result = Array.from({length:nums1.length},()=> -1)
	const stack = []

	for(let i=0; i< nums1.length; i++){
		map[nums1[i]] = i 
	}

	for(let i=0; i< nums2.length; i++){
		while(stack.length && nums2[i] > stack[stack.length-1]){
			const element = stack.pop()
			if(element in map){
				result[map[element]] = nums2[i]
			} 
		}   
		if(nums2[i] < stack[stack.length-1] || !stack.length){
			stack.push(nums2[i])
		}
	}

	return result
};
