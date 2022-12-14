import { HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDrinkToFav, removeDrinkFromFav } from '../../redux/slices/drinksSlice';
import { RootState } from '../../redux/store';
import * as S from "./Card.styled";

interface Props {
    drinkImg: string;
    drinkTitle: string;
    drinkId: string;
}

export const Card = ({ drinkImg, drinkTitle, drinkId }: Props) => {
    const dispatch = useDispatch();

    const { favoritesDrinks } = useSelector((state: RootState) => state.drinks);

    const [height, setHeight] = useState(0)
    const [isDrinkFav, setIsDrinkFav] = useState(false)

    useEffect(() => {
        favoritesDrinks.forEach(drink => {
            if (drink.idDrink === drinkId) {
                setIsDrinkFav(true)
            }
        })
    }, [favoritesDrinks])

    const cardTitle = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (cardTitle.current !== null) {
            setHeight(cardTitle.current.clientHeight)
        }
    })

    const handleToggleFav = () => {
        if(isDrinkFav){
            dispatch(removeDrinkFromFav(drinkId))
            setIsDrinkFav(false)
        } else {
            setIsDrinkFav(true)
            dispatch(addDrinkToFav({
                strDrinkThumb: drinkImg,
                strDrink: drinkTitle,
                idDrink: drinkId
            }))
        }
    }

    return (
        <S.Card>
            <S.CardContent>
                <S.CardImg src={drinkImg} />
                <S.CardText ref={cardTitle}>
                    {drinkTitle}
                </S.CardText>
                <S.CardBox height={height}>
                    <S.CardBtn className="card-btn">
                        <Button type="primary" onClick={() => { navigate(`drink-page/${drinkId}`) }}>View details</Button>
                    </S.CardBtn>
                </S.CardBox>
                <S.CardHeart onClick={handleToggleFav} checked={isDrinkFav}>
                    <HeartFilled />
                </S.CardHeart>
            </S.CardContent>
        </S.Card>
    )
}
