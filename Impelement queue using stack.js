var MyQueue = function() {
    this.input = [];
    this.output = [];
    
    this.rewrite = (from, to) => {
        if (to.length > 0)
            return;
        while (from.length > 0) {
            to.push(from.pop());
        }
    }
};

MyQueue.prototype.push = function(x) {
    this.input.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.rewrite(this.input, this.output);
    return this.output.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this.rewrite(this.input, this.output);
    return this.output[this.output.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.input.length === 0 && this.output.length === 0;
};
