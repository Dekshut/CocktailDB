import { IDrink } from "../interfaces/drink.interface";

export function shuffleArray(array: IDrink[]) {
    const newArr = JSON.parse(JSON.stringify(array))

    for (let i = newArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    return newArr
}