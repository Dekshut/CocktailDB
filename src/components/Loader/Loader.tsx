import React from 'react'
import * as S from "./Loader.styled";

export const Loader = () => {
    return (
        <S.LoaderOverlay>
            <S.Loader />
        </S.LoaderOverlay>
    )
}
