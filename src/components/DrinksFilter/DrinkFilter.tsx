import { useEffect, useState } from 'react'
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDrinksByAlcoholic, getAllDrinksByCategory, getAllDrinksByGlass, getAllDrinksByIngredientName } from '../../api/drinks';
import { setAllDrinksByFilter, setCurrentFilter } from '../../redux/slices/drinksSlice';
import { RootState } from '../../redux/store';

interface IDrinkFilter {
    filterType: 'alcoholic' | 'ingredients' | 'glasses' | 'categories';
    currentFilterType: string;
    setCurrentFilterType: (value: string) => void;
}

export const DrinkFilter = ({ filterType,  currentFilterType, setCurrentFilterType}: IDrinkFilter) => {
    const dispatch = useDispatch();
    const { alcoholic, ingredients, glasses, categories } = useSelector((state: RootState) => state.drinks);

    const [filterOptions, setFilterOptions] = useState([]);
    const [selectValue, setSelectValue] = useState(`By ${filterType}`);

    useEffect(() => {
        if(currentFilterType !== filterType){
            setSelectValue(`By ${filterType}`)
        }
    }, [currentFilterType])

    const handleChange = (value: string) => {
        if (filterType === 'ingredients') {
            getAllDrinksByIngredientName(value)
                .then(d => {
                    dispatch(setAllDrinksByFilter(d.drinks))
                })
        } else if (filterType === 'alcoholic') {
            getAllDrinksByAlcoholic(value)
                .then(d => {
                    dispatch(setAllDrinksByFilter(d.drinks))
                })
        } else if (filterType === 'categories') {
            getAllDrinksByCategory(value)
                .then(d => {
                    dispatch(setAllDrinksByFilter(d.drinks))
                })
        } else if (filterType === 'glasses') {
            getAllDrinksByGlass(value)
                .then(d => {
                    dispatch(setAllDrinksByFilter(d.drinks))
                })
        }

        setCurrentFilterType(filterType)
        setSelectValue(value)
        dispatch(setCurrentFilter(value))
    };

    useEffect(() => {
        let options = [];

        if (filterType === 'alcoholic') {
            options = alcoholic.map((option: any) => {
                return {
                    value: option.strAlcoholic,
                    label: option.strAlcoholic
                }
            })
        } else if (filterType === 'ingredients') {
            options = ingredients.map((option: any) => {
                return {
                    value: option.strIngredient1,
                    label: option.strIngredient1
                }
            })
        } else if (filterType === 'glasses') {
            options = glasses.map((option: any) => {
                return {
                    value: option.strGlass,
                    label: option.strGlass
                }
            })
        } else if (filterType === 'categories') {
            options = categories.map((option: any) => {
                return {
                    value: option.strCategory,
                    label: option.strCategory
                }
            })
        }

        setFilterOptions(options)
    }, [filterType])

    return (
        <Select
            value={selectValue}
            style={{ width: 200 }}
            onChange={handleChange}
            options={filterOptions}
        />
    )
}
