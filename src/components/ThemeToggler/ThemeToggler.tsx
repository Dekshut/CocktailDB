import React from 'react'
import * as S from "./ThemeToggler.styled";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/slices/appSlice';
import { RootState } from '../../redux/store';

export const ThemeToggler = () => {
    const dispatch = useDispatch();
    const { darkMode } = useSelector((state: RootState) => state.app);


    const handleToggleThemeMode = (checked: boolean) => {
        dispatch(toggleTheme(checked))
    }

    return (
        <S.SwitchHolder>
            <S.SwitchLabel>
                <span>Dark mode</span>
            </S.SwitchLabel>
            <S.SwitchToggle>
                <input
                    checked={darkMode}
                    type="checkbox"
                    id="bluetooth"
                    onChange={(e) => handleToggleThemeMode(e.target.checked)}
                />
                <label htmlFor="bluetooth"></label>
            </S.SwitchToggle>
        </S.SwitchHolder>
    )
}
