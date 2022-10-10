let dominopilling = function(m,n) {
    let result;
    if(m%2 === 0 && n%2 ===0) {
        result = (m*n) /2;
    }
    else if(m%2 ===0  && n%2 !==0) {
        result = (m/2)*n;
    }
    else if(m%2 !==0 && n%2===0) {
        result= (n/2)*m;
    }
    else {
        result = ((m*n)-1)/2;
    }
    
    return result
}
