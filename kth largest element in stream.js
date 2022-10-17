var KthLargest = function(k, nums) {
    this.pq = new MinPriorityQueue();
    this.k = k;
    nums.map(x=> this.add(x));
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.pq.size() < this.k)
        this.pq.enqueue(val);
    else if (this.pq.front().element < val){
        this.pq.enqueue(val);
        this.pq.dequeue();
    }
    return this.pq.front().element;
   
};
