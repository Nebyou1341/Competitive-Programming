function kClosest(points, k){
    let result = []
    let minHeap = new MinPriorityQueue()
    points.forEach(p=> {
        const distanceFromOrigin = Math.sqrt(p[0] * p[0] + p[1] * p[1])
        minHeap.enqueue(p, distanceFromOrigin)
    })
    
    while(result.length<k) result.push(minHeap.dequeue().element)
    
    return result
}
