import { useEffect, useState } from 'react'
import { CardsList } from '../../components/CardsList/CardsList';
import { PageContainer } from '../../components/PageContainer/PageContainer.styled';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import * as S from './Home.styled'
import { shuffleArray } from '../../helpers/shuffleArray';

export const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { alcoholicDrinks } = useSelector((state: RootState) => state.drinks);
    const { mode3d } = useSelector((state: RootState) => state.app);

    const [drinksToShow, setDrinksToShow] = useState(shuffleArray(alcoholicDrinks).slice(0, 8))

    useEffect(() => {
        setDrinksToShow(shuffleArray(alcoholicDrinks).slice(0, 8))
    }, [alcoholicDrinks])

    const refreshRandomDrinks = () => {
        const refreshed = shuffleArray(alcoholicDrinks).slice(0, 8)
        setDrinksToShow(refreshed)
    }

    return (
        <>
            <PageContainer>
                {/* <Loader /> */}
                <S.ActionsContainer mode3d={mode3d}>
                    <Button
                        icon={<ReloadOutlined />}
                        onClick={refreshRandomDrinks}
                    >
                        Refresh
                    </Button>
                </S.ActionsContainer>

                <CardsList header="Random Alcoholic Drinks" drinks={drinksToShow} />
            </PageContainer>
        </>
    )
}
