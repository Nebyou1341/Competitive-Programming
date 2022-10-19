var isPalindrome = function(head) {
    if(!head) {
        return true;
    }
    
    const arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    
    while(arr.length > 1) {
        if(arr.pop() !== arr.shift()) {
            return false;
        }
    }
    return true;
};
