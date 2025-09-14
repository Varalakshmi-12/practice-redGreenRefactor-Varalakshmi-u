//Green Phase
function countVowels(str) {
    return 2;
}
module.exports = countVowels;

//Refactor Phase
function countVowels(str){
    const vowels='aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
}

module.exports = countVowels;