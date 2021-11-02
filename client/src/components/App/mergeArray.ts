import { PeopleArr } from "./shuffle";

export interface EmailTo {
    person: string;
    email: string;
    emailTo: string;
}

// EmailTo
let arrayToEmail: EmailTo[] = [
    {
        person: "",
        email: "",
        emailTo: "",
    },
];

// combines both arrays to add an email to recipient to array list
export function mergeArray(
    array1: PeopleArr[],
    array2: PeopleArr[]
): EmailTo[] {
    console.log(array1, array2);
    for (let i = 0; i < array1.length; i++) {
        arrayToEmail[i] = {
            person: array1[i].person,
            email: array1[i].email,
            emailTo: array2[i].email,
        };
    }
    console.log(arrayToEmail);
    return arrayToEmail;
}
