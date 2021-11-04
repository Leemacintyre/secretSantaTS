"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeArray = void 0;
// EmailTo
let arrayToEmail = [
    {
        fName: "",
        email: "",
        emailTo: "",
    },
];
function mergeArray(array1, array2) {
    console.log(array1, array2);
    for (let i = 0; i < array1.length; i++) {
        arrayToEmail[i] = {
            fName: array1[i].fName,
            email: array1[i].email,
            emailTo: array2[i].email,
        };
    }
    console.log(arrayToEmail);
    return arrayToEmail;
}
exports.mergeArray = mergeArray;
//# sourceMappingURL=mergeArray.js.map