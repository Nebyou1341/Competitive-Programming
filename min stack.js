var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(val) {
    let min = this.stack.length === 0 ? val : this.stack[this.stack.length-1].min;
    this.stack.push({val: val, min: Math.min(min, val)});
};

MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1].val;
};

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1].min;
};
