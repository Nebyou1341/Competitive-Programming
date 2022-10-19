var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>b-a)
    let first=0
    let last=people.length-1
    let boat=0
    do{
        if(people[first]+people[last]<=limit){
            boat++
            first++
            last--
        }else if(first==last){
            boat++
            break
        }
        
        else{
            boat++
            first++
        
        }
        
    }while( first<=last)
        return boat
    
};
