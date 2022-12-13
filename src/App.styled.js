import styled from 'styled-components';

export const App = styled.div`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    padding-bottom: 80px;
`;

export const SwitchBtn = styled.div`
    position: fixed;
    bottom: 60px;
    right: 60px;
    display: flex;
    align-items: center;

    &>p{
        display: block;
        margin-right: 10px;
        font-size: 18px;
    }
`;

