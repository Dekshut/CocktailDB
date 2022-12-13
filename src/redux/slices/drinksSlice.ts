import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllDrinksByAlcoholic, getDrinkByName, getListOfAlcoholic, getListOfCategories, getListOfGlasses, getListOfIngredients } from "../../api/drinks";
import { shuffleArray } from "../../helpers/shuffleArray";
import { ICategory, IDrink, IGlass, IIngredient } from "../../interfaces/drink.interface";

interface IDrinkSlice {
    alcoholicDrinks: IDrink[],
    favoritesDrinks: IDrink[],
    allDrinksByFilter: IDrink[],
    currentFilter: string,

    categories: ICategory[],
    glasses: IGlass[],
    ingredients: IIngredient[],
    alcoholic: any
};

export const getAlcoholicDrinks = createAsyncThunk(
    'drinks/getAlcoholicDrinks',
    async function (_, { dispatch }) {
        const { drinks } = await getAllDrinksByAlcoholic("Alcoholic");
        dispatch(setDrinks(drinks));
    },
);

export const getInitialData = createAsyncThunk(
    'drinks/getInitial',
    async function (_, { dispatch }) {
        const { drinks: categories } = await getListOfCategories();
        const { drinks: glasses } = await getListOfGlasses();
        const { drinks: ingredients } = await getListOfIngredients();
        const { drinks: alcoholic } = await getListOfAlcoholic();

        dispatch(setInitialData({ categories, glasses, ingredients, alcoholic }));
    },
);

export const searchDrinkByName = createAsyncThunk(
    'drinks/searchDrink',
    async function (value: string, { dispatch }) {
        const drinks = await getDrinkByName(value);

        dispatch(setAllDrinksByFilter(drinks || []));
    },
);

// const fav = JSON.parse(localStorage.getItem('fav') ?? "[]")

const initialState: IDrinkSlice = {
    alcoholicDrinks: [],
    favoritesDrinks: [
        {
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/fi67641668420787.jpg",
            "strDrink": "Sex on the Beach",
            "idDrink": "12754"
        },
        {
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg",
            "strDrink": "Gin Tonic",
            "idDrink": "178365"
        }
    ],
    allDrinksByFilter: [],
    currentFilter: 'Alcoholic',

    categories: [],
    glasses: [],
    ingredients: [],
    alcoholic: [],
}

const drinksSlice = createSlice({
    name: 'drinks',
    initialState,
    reducers: {
        setInitialData(state, action) {
            const { categories, glasses, ingredients, alcoholic } = action.payload
            state.categories = categories
            state.glasses = glasses
            state.ingredients = ingredients
            state.alcoholic = alcoholic
        },
        setDrinks(state, action) {
            state.alcoholicDrinks = action.payload
        },
        setAllDrinksByFilter(state, action) {
            state.allDrinksByFilter = action.payload
        },
        setCurrentFilter(state, action) {
            state.currentFilter = action.payload
        },
        addDrinkToFav(state, action) {
            state.favoritesDrinks = [...state.favoritesDrinks, action.payload]
            const fav = JSON.stringify(state.favoritesDrinks)
            localStorage.setItem('fav', fav);
        },
        removeDrinkFromFav(state, action) {
            const drinkId = action.payload

            state.favoritesDrinks = state.favoritesDrinks.filter(drink => drink.idDrink !== drinkId)

            const fav = JSON.stringify(state.favoritesDrinks)
            localStorage.setItem('fav', fav);
        }
    },
    extraReducers: {},
})

export const {
    setInitialData,
    setDrinks,
    setAllDrinksByFilter,
    setCurrentFilter,
    addDrinkToFav,
    removeDrinkFromFav
} = drinksSlice.actions;

export default drinksSlice.reducer;