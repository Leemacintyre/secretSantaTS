export interface PeopleArr {
    fName: string;
    email: string;
}

export function shuffle(array: any): any {
    let currentIndex = array.length,
        randomIndex;

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

export function checkAndCreateShufflesArray(
    arrayToShuffle: PeopleArr[],
    validationArray: PeopleArr[]
): PeopleArr[] {
    const newArray: PeopleArr[] = shuffle(arrayToShuffle);

    newArray.map((person, index: number): boolean => {
        if (person.email === validationArray[index].email) {
            checkAndCreateShufflesArray(arrayToShuffle, validationArray);
        }
        return true;
    });
    console.log(newArray);
    return newArray;
}
