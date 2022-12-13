import styled from 'styled-components';

export const SwitchHolder = styled.div`
    display: flex;
    padding: 10px 20px;
    border-radius: 30px;
    justify-content: space-between;
    align-items: center;
    box-shadow:  10px 10px 30px ${props => props.theme.primaryShadowDark},
     -10px -10px 30px ${props => props.theme.primaryShadowLight};
`;

export const SwitchLabel = styled.div`
    padding-right: 20px;
`;

export const SwitchToggle = styled.div`
    height: 40px;

    & input[type="checkbox"]{
        position: absolute;
        opacity: 0;
        z-index: -2;
    }

    & input[type="checkbox"]+label{
        position: relative;
        display: inline-block;
        width: 100px;
        height: 40px;
        border-radius: 20px;
        margin: 0;
        cursor: pointer;
        box-shadow: inset 7px 7px 21px ${props => props.theme.primaryShadowDark},
         inset -7px -7px 21px ${props => props.theme.primaryShadowLight};
    }

    & input[type="checkbox"]+label::before{
        position: absolute;
        content: 'OFF';
        font-size: 13px;
        text-align: center;
        line-height: 25px;
        top: 8px;
        left: 8px;
        width: 45px;
        height: 25px;
        border-radius: 20px;
        color: ${props => props.theme.primary};
        font-weight: 700;
        background-color: ${props => props.theme.text};
        transition: .3s ease-in-out;
    }

    & input[type="checkbox"]:checked+label::before{
        left: 50%;
        content: 'ON';
        color: ${props => props.theme.primary};
        background-color: ${props => props.theme.text};
    }
`;


