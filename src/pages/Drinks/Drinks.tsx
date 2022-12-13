import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchDrinkByName, setAllDrinksByFilter, setCurrentFilter } from '../../redux/slices/drinksSlice'
import { AppDispatch, RootState } from '../../redux/store'
import { CardsList } from '../../components/CardsList/CardsList'
import { DrinkFilter } from '../../components/DrinksFilter/DrinkFilter'
import { PageContainer } from '../../components/PageContainer/PageContainer.styled'
import { Input, Space } from 'antd';
import * as S from './Drinks.styled'
import { IDrinkFilters } from '../../interfaces/drink.interface'
const { Search } = Input;

const filterTypes: IDrinkFilters[] = ['alcoholic', 'ingredients', 'glasses', 'categories']

export const Drinks = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { allDrinksByFilter, currentFilter, alcoholicDrinks } = useSelector((state: RootState) => state.drinks);

    const [searchValue, setSearchValue] = useState('');
    const [currentFilterType, setCurrentFilterType] = useState('');

    useEffect(() => {
        dispatch(setAllDrinksByFilter(alcoholicDrinks))
        dispatch(setCurrentFilter("Alcoholic"))
    }, [])

    useEffect(() => {
        dispatch(setAllDrinksByFilter(alcoholicDrinks))
    }, [alcoholicDrinks])

    useEffect(() => {
        if (currentFilterType) {
            setSearchValue('')
        }
    }, [currentFilterType])

    return (
        <>
            <PageContainer>
                <S.ActionsContainer>
                    <S.FiltersContainer>
                        {filterTypes.map((filter: IDrinkFilters, index) => (
                            <DrinkFilter
                                key={index}
                                filterType={filter}
                                currentFilterType={currentFilterType}
                                setCurrentFilterType={setCurrentFilterType}
                            />
                        ))}
                    </S.FiltersContainer>

                    <Search
                        value={searchValue}
                        placeholder="input search drink"
                        onSearch={(value) => {
                            setCurrentFilterType('')
                            dispatch(setCurrentFilter(value))
                            dispatch(searchDrinkByName(value))
                        }}
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                            if (e.target.value == "") {
                                dispatch(setAllDrinksByFilter(alcoholicDrinks))
                                dispatch(setCurrentFilter("Alcoholic"))
                            }
                        }}
                        style={{
                            width: 200,
                        }}
                    />
                </S.ActionsContainer>

                <CardsList drinks={allDrinksByFilter} header={`All drinks by '${currentFilter}'`} />

            </PageContainer>
        </>
    )
}
