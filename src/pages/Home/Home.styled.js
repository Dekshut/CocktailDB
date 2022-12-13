import styled, { css } from 'styled-components';

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    ${props => props.mode3d && css`
        transform: scale(1.15) rotate(17deg) skew(-40deg, 5deg);
    `}
`