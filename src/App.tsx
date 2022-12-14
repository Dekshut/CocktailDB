import { useEffect } from 'react';
import * as S from './App.styled';
import { Header } from './components/Header/Header';
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './styles/theme.styled';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { Drinks } from './pages/Drinks/Drinks';
import { getAlcoholicDrinks, getInitialData } from './redux/slices/drinksSlice';
import { Switch } from 'antd';
import { toggle3dMode } from './redux/slices/appSlice';
import { DrinkPage } from './pages/DrinkPage/DrinkPage';
import { Favorites } from './pages/Favorites/Favorites';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const { darkMode, mode3d } = useSelector((state: RootState) => state.app);
  const location = useLocation()

  useEffect(() => {
    dispatch(getAlcoholicDrinks());
    dispatch(getInitialData());
  }, [])

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <S.App>
        <Header />

        <Routes>
          <Route path="CocktailDB/" element={<Home />} />
          <Route path="CocktailDB/drinks" element={<Drinks />} />
          <Route path="CocktailDB/drink-page/:drinkId" element={<DrinkPage />} />
          <Route path="CocktailDB/favorites" element={<Favorites />} />
        </Routes>

        {!location.pathname.includes('/drink-page') && (
          <S.SwitchBtn>
            <p>3D Mode</p>
            <Switch
              checked={mode3d}
              onChange={(checked, e) => { dispatch(toggle3dMode(checked)) }}
            />
          </S.SwitchBtn>
        )}

      </S.App>
    </ThemeProvider>
  );
}

export default App;
