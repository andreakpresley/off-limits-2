export interface Word {
    "id": string,
    "correctWord": string,
    "offLimits": any
};


// function makeArray(arr) {
//     arr.forEach(word => {
//         let tempArr = [];
//         Object.keys(word.offLimits).forEach(function(key) {
//             console.log(key, word.offLimits[key]);
//             tempArr.push(word.offLimits[key])
//         });
//         word.offLimits = tempArr;
//     })
// }

