"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAndCreateShufflesArray = exports.shuffle = void 0;
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}
exports.shuffle = shuffle;
function checkAndCreateShufflesArray(arrayToShuffle, validationArray) {
    const newArray = shuffle(arrayToShuffle);
    newArray.map((person, index) => {
        if (person.email === validationArray[index].email) {
            checkAndCreateShufflesArray(arrayToShuffle, validationArray);
        }
        return true;
    });
    console.log(newArray);
    return newArray;
}
exports.checkAndCreateShufflesArray = checkAndCreateShufflesArray;
//# sourceMappingURL=shuffle.js.map