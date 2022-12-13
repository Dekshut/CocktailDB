import styled from 'styled-components';

export const DrinkImg = styled.img`
    object-fit: cover;
    width: 500px;
    border-radius: 20px;
`

export const DrinkImgWrapper = styled.div`
    position: relative;
`

export const DrinkWrapper = styled.div`
    border-radius: 30px;
    padding: 40px;
    box-shadow: inset 10px 10px 30px ${props => props.theme.primaryShadowDark},
        inset -10px -10px 30px ${props => props.theme.primaryShadowLight};
`

export const DrinkContainer = styled.div`
    padding: 20px;
    display: flex;
    gap: 60px;
    border-radius: 30px;
    box-shadow: 7px 7px 21px ${props => props.theme.primaryShadowDark},
    -7px -7px 21px ${props => props.theme.primaryShadowLight};
`

export const DrinkContent = styled.div`
    position: relative;

    & h3{
        font-size: 30px;
        margin-bottom: 40px;
        font-weight: 600;
    }

    & ul{
        list-style: disc;
        font-size: 20px;
        margin-left: 20px;
        margin-bottom: 40px;
    }

    .drink-label{
        margin-bottom: 10px;
        font-weight: 600;
    }

    .drink-tags{
        top: 0;
        right: 0;
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 7px;
        max-width: 200px;

        & div{
            padding: 2px 5px;
            background-color: ${props => props.theme.text};
            color: ${props => props.theme.primary};
            border-radius: 5px;
        }
    }

`

export const DrinkIngredients = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: auto;
    max-width: max-content;
    gap: 20px;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.primary};
    padding: 20px;
    border-radius: 10px;
    font-size: 18px;
    margin-bottom: 40px;

    & img{
        width: 100px;
    }

    & .drink-ingredient{
       display: flex;
       flex-direction: column;
       align-items: center;

       & span{
        text-align: center;
       }

       & img{
        margin-bottom: 10px;
       }
    }
`