var middleNode = function(head) {
    
    var fastnode = head;
    var slownode = head;
    while(fastnode !== null && fastnode.next !== null) 
    {
        fastnode = fastnode.next.next
        slownode = slownode.next
    }
    return slownode;
};
