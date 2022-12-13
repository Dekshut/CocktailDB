import { customAxios } from "./api";

const search_API = "search.php"
const lookup_API = "lookup.php"
const random_API = "random.php"
const filter_API = "filter.php"
const list_API = "list.php"

// ===================== Drinks api =====================

export async function getDrinkByName(drinkName: string) {
    return await customAxios.get(`${search_API}?s=${drinkName}`).then(res => res.data.drinks)
} 

export async function getDrinkDetailsByID(drinkID: string) {
    return await customAxios.get(`${lookup_API}?i=${drinkID}`)
} 

export async function getRandomDrink() {
    return await customAxios.get(random_API).then(res => res.data.drinks[0])
} 

// =====================  Ingredients api ===================== 

export async function getIngredientByName(ingredientName: string) {
    return await customAxios.get(`${search_API}?i=${ingredientName}`)
} 

export async function getIngredientByID(ingredientID: number) {
    return await customAxios.get(`${lookup_API}?iid=${ingredientID}`)
}

// =====================  Filters api ===================== 
export async function getAllDrinksByIngredientName(ingredientName: string) {
    return await customAxios.get(`${filter_API}?i=${ingredientName}`).then(res => res.data)
}

export async function getAllDrinksByAlcoholic(value: string) {
    return await customAxios.get(`${filter_API}?a=${value}`).then(res => res.data)
}

export async function getAllDrinksByCategory(category: string) {
    return await customAxios.get(`${filter_API}?c=${category}`).then(res => res.data)
}

export async function getAllDrinksByGlass(glass: string) {
    return await customAxios.get(`${filter_API}?g=${glass}`).then(res => res.data)
}

// List the categories, glasses, ingredients 

export async function getListOfAlcoholic() {
    return await customAxios.get(`${list_API}?a=list`).then(res => res.data)
}

export async function getListOfCategories() {
    return await customAxios.get(`${list_API}?c=list`).then(res => res.data)
}

export async function getListOfGlasses() {
    return await customAxios.get(`${list_API}?g=list`).then(res => res.data)
}

export async function getListOfIngredients() {
    return await customAxios.get(`${list_API}?i=list`).then(res => res.data)
}






