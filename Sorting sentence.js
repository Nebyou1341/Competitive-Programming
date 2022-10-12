/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let wordArray = s.split(" ")
    let orderedSentence = []
for (let i = 0; i < wordArray.length; i++){
    let idx = wordArray[i].slice(-1)-1
    orderedSentence[idx] = wordArray[i].slice(0,-1);
}                                                 
return orderedSentence.join(" ")

};
