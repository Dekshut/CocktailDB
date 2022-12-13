import { useEffect, useState } from 'react'
import { RootState } from '../../redux/store';
import { Card } from '../Card/Card';
import { useSelector } from 'react-redux';
import * as S from "./CardsList.styled";
import { IDrink } from '../../interfaces/drink.interface';
import { CardFlip } from '../CardFlip/CardFlip';
import { Pagination } from 'antd';

interface Props {
  header: string;
  drinks: IDrink[];
}

export const CardsList = ({ header, drinks }: Props) => {
  const { mode3d } = useSelector((state: RootState) => state.app);

  const [drinksToShow, setDrinksToShow] = useState(drinks.slice(0, 8))

  useEffect(() => {
    setDrinksToShow(drinks.slice(0, 8))
  }, [drinks])

  const handlePaginate = (page: number, pageSize: number) => {
    setDrinksToShow(drinks.slice((page - 1) * pageSize, pageSize * page))
  }

  return (
    <S.CardListWrapper>
      <S.CardListHeader mode3d={mode3d}>
        {header}
      </S.CardListHeader>
      <S.CardList mode3d={mode3d}>
        {drinksToShow.map((item: IDrink, index: number) => (
          <>
            {mode3d ? (
              <CardFlip
                key={index}
                {...item}
              />
            ) : (
              <Card key={index} drinkImg={item.strDrinkThumb} drinkTitle={item.strDrink} drinkId={item.idDrink} />
            )}
          </>
        ))}
      </S.CardList>

      <S.PaginationContainer mode3d={mode3d}>
        <Pagination
          defaultCurrent={1}
          total={drinks.length}
          onChange={handlePaginate}
          pageSize={8}
          showSizeChanger={false}
          hideOnSinglePage={true}
        />
      </S.PaginationContainer>

    </S.CardListWrapper>
  )
}
