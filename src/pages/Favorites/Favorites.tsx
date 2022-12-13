import React from 'react'
import { useSelector } from 'react-redux';
import { CardsList } from '../../components/CardsList/CardsList'
import { PageContainer } from '../../components/PageContainer/PageContainer.styled'
import { RootState } from '../../redux/store';

export const Favorites = () => {
    const { favoritesDrinks } = useSelector((state: RootState) => state.drinks);

    return (
        <PageContainer>
             <CardsList drinks={favoritesDrinks} header={`My Favorites Drinks`} />
        </PageContainer>
    )
}
