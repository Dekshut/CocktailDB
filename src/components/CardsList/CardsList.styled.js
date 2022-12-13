import styled, { css } from 'styled-components';

export const CardListWrapper = styled.div`
    min-height: 860px;
`;

export const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;

    ${props => props.mode3d && css`
        min-height: 425px;
        margin: 0 auto;
        max-width: 900px;
        width: 100%;
        transform: scale(1.15) rotate(17deg) skew(-40deg, 5deg);
        gap: 0px;
    `}
`;

export const CardListHeader = styled.div`
    text-align: center;
    margin-bottom: 40px;
    font-size: 26px;

    ${props => props.mode3d && css`
        transform: rotate(17deg) skew(-40deg, 5deg) translateX(22%);
        margin-bottom: 140px;
    `}
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;

    ${props => props.mode3d && css`
        margin: 0px;
        transform: scale(1.15) rotate(17deg) skew(-40deg, 5deg) translate(-15%, 100px);
    `}

    & .ant-pagination{
        a, span {
            color: ${props => props.theme.text} !important
        }

        li.ant-pagination-item-active{
            background-color: ${props => props.theme.text};
            border: none;

            & a{
                color: ${props => props.theme.primary} !important
            }
        }

        svg {
            fill: ${props => props.theme.text}
        }
    }
`