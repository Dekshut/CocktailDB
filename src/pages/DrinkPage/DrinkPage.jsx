import { HeartFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react'
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDrinkDetailsByID } from '../../api/drinks';
import { CardHeart } from '../../components/Card/Card.styled';
import { PageContainer } from '../../components/PageContainer/PageContainer.styled'
import { addDrinkToFav, removeDrinkFromFav } from '../../redux/slices/drinksSlice';
import * as S from './DrinkPage.styled'

export const DrinkPage = () => {
    const dispatch = useDispatch();
    const { favoritesDrinks } = useSelector((state: RootState) => state.drinks);

    let { drinkId } = useParams();

    const [drinkDetails, setDrinkDetails] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [isDrinkFav, setIsDrinkFav] = useState(false)

    useEffect(() => {
        setIsDrinkFav(false)
        favoritesDrinks.forEach(drink => {
            if (drink.idDrink === drinkId) {
                setIsDrinkFav(true)
            }
        })
    }, [favoritesDrinks])

    useEffect(() => {
        if (drinkId) {
            getDrinkDetailsByID(drinkId).then(res => {
                if (res.status === 200) {
                    setDrinkDetails(res.data.drinks[0])
                }
            })
        }
    }, [])

    useEffect(() => {
        const drinkInredients = []

        const detailskeys = Object.keys(drinkDetails);
        const measurements = detailskeys.filter(str => str.includes('strMeasure'));
        const ingredTitles = detailskeys.filter(str => str.includes('strIngredient'));

        for (let i = 0; i < ingredTitles.length; i++) {
            if (!drinkDetails[ingredTitles[i]]) {
                continue;
            }
            const ingredient = {}
            ingredient.text = (drinkDetails[measurements[i]] || '') + ' ' + drinkDetails[ingredTitles[i]]
            ingredient.img = `https://www.thecocktaildb.com/images/ingredients/${drinkDetails[ingredTitles[i]]}.png`
            drinkInredients.push(ingredient)
        }

        setIngredients(drinkInredients)
    }, [drinkDetails])

    const handleToggleFav = () => {
        if(isDrinkFav){
            dispatch(removeDrinkFromFav(drinkId))
        } else {
            dispatch(addDrinkToFav({
                strDrinkThumb: drinkDetails?.strDrinkThumb,
                strDrink: drinkDetails?.strDrink,
                idDrink: drinkId
            }))
        }
    }


    return (
        <PageContainer>
            <S.DrinkWrapper>
                <S.DrinkContainer>
                    <S.DrinkImgWrapper>
                        <S.DrinkImg src={drinkDetails?.strDrinkThumb} />
                        <CardHeart onClick={handleToggleFav} checked={isDrinkFav}>
                            <HeartFilled />
                        </CardHeart>
                    </S.DrinkImgWrapper>


                    <S.DrinkContent>
                        <h3>{drinkDetails?.strDrink}</h3>

                        <div className='drink-tags'>
                            {drinkDetails.strTags?.split(',').map((tag, index) => (
                                <div key={index}>{tag}</div>
                            ))}
                        </div>

                        <ul>
                            <li>{drinkDetails?.strAlcoholic}</li>
                            <li>{drinkDetails?.strCategory}</li>
                            <li>{drinkDetails?.strGlass}</li>
                        </ul>
                        <p className='drink-label'>Ingredients:</p>
                        <S.DrinkIngredients >
                            {ingredients.map((ingredient, index) => (
                                <div className='drink-ingredient' key={index}>
                                    <img src={ingredient.img} />
                                    <span>{ingredient.text}</span>
                                </div>
                            ))}
                        </S.DrinkIngredients>

                        <p className='drink-label'>Instructions:</p>
                        <span>{drinkDetails?.strInstructions || "Just shake ;)"}</span>
                    </S.DrinkContent>
                </S.DrinkContainer>
            </S.DrinkWrapper>
        </PageContainer>
    )
}
