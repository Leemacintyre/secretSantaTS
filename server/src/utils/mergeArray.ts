import { PeopleArr } from "./shuffle";

export interface EmailTo {
    fName: string;
    email: string;
    emailTo: string;
}

// EmailTo
let arrayToEmail: EmailTo[] = [
    {
        fName: "",
        email: "",
        emailTo: "",
    },
];

export function mergeArray(
    array1: PeopleArr[],
    array2: PeopleArr[]
): EmailTo[] {
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
