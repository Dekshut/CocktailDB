export interface IDrink {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
}

export interface ICategory{
    strCategory: string
}

export interface IGlass{
    strGlass: string
}

export interface IIngredient{
    strIngredient1: string
}

export type IDrinkFilters = 'alcoholic' | 'ingredients' | 'glasses' | 'categories'
