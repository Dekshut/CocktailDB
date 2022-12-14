import React, { useState } from 'react'
import * as S from "./CardFlip.styled";
import './CardFlip.scss'
import { IDrink } from '../../interfaces/drink.interface';
import { useNavigate } from 'react-router-dom';

const angle = 10

export const CardFlip = ({ strDrinkThumb, strDrink, idDrink }: IDrink) => {
    const navigate = useNavigate();
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleChangeCoordinates = (x: number, y: number) => {
        setRotateX(x)
        setRotateY(y)
    }

    return (
        <>
            <S.Col onClick={() => { navigate(`drink-page/${idDrink}`) }}>
                <S.CardContainer
                    className="card-container"
                    onMouseLeave={() => handleChangeCoordinates(0, 0)}
                >
                    <div className="region region1" onMouseEnter={() => handleChangeCoordinates(angle, -2 * angle)}></div>
                    <div className="region region2" onMouseEnter={() => handleChangeCoordinates(angle, 0)}></div>
                    <div className="region region3" onMouseEnter={() => handleChangeCoordinates(angle, angle)}></div>
                    <div className="region region4" onMouseEnter={() => handleChangeCoordinates(0, -2 * angle)}></div>
                    <div className="region region5"></div>
                    <div className="region region6" onMouseEnter={() => handleChangeCoordinates(0, angle)}></div>
                    <div className="region region7" onMouseEnter={() => handleChangeCoordinates(-1 * angle, -2 * angle)}></div>
                    <div className="region region8" onMouseEnter={() => handleChangeCoordinates(-1 * angle, 0)}></div>
                    <div className="region region9" onMouseEnter={() => handleChangeCoordinates(-1 * angle, angle)}></div>
                    <div className="card">
                        <img src={strDrinkThumb} alt="drink-img" />
                        <S.CardText>{strDrink}</S.CardText>
                    </div>
                </S.CardContainer>
                <S.CardShadow rotateX={rotateX} rotateY={rotateY} />
            </S.Col>
        </>
    )
}
