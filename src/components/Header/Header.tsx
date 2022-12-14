import React from 'react'
import { PageContainer } from '../PageContainer/PageContainer.styled';
import { useLocation } from 'react-router-dom';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import * as S from "./Header.styled";
import { Badge } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

export const Header = () => {
  const location = useLocation();
  const { favoritesDrinks } = useSelector((state: RootState) => state.drinks);

  return (
    <S.Header>
      <PageContainer>
        <S.HeaderInner>

          <S.Logo>
            TheCocktailDB
          </S.Logo>
          <S.Nav>
            <S.NavItem to="/" checked={location.pathname === "/"}>
              Home
            </S.NavItem>
            <S.NavItem to="/drinks" checked={location.pathname === "/drinks"}>
              Drinks
            </S.NavItem>
            <S.NavItem to="/favorites" checked={location.pathname === "/favorites"} className="heart">
              <Badge count={favoritesDrinks.length}>
                <HeartFilled/>
              </Badge>
            </S.NavItem>
          </S.Nav>
          <ThemeToggler />

        </S.HeaderInner>
      </PageContainer>
    </S.Header>
  )
}
