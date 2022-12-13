import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 80px;
    background-color: ${props => props.theme.primary};
`;

export const Logo = styled.div`
    font-size: 28px;
    font-weight: 700;
`;

export const HeaderInner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    position: relative;
`;

export const Nav = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavItem = styled(Link)`
    border-radius: 20px;
    margin: 0px 10px;
    padding: 10px 20px;
    font-size: 20px;

    &.heart{
        & span {
            display: block;
        }

        & svg{
            width: 30px;
            height: 30px;
            fill: ${props => props.theme.text};
        }
    }

    ${props => props.checked && css`
        background: ${props => props.theme.text};
        color: ${props => props.theme.primary};


        &.heart{
            & svg{
                fill: ${props => props.theme.primary};
            }
        }

    `}
`