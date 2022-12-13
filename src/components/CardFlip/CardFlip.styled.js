import styled from 'styled-components';

export const Col = styled.div`
    position: relative;
    max-width: 220px;
    width: 100%;
    
    &:hover{
        & .card-container{ 
            transition: all .2s;
            transform: translate(-50px, -35px);
        }
    }
`;

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`;

export const CardText = styled.div`
    padding: 5px;
    text-align: center;
    width: 100%;
    background: #F7F6F2;  
    color: #4B6587;
    position: absolute;
    width: 180px;
    border-radius: 10px;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 1px;
    border: 1px solid ${props => props.theme.primary};
`;

export const CardShadow = styled.div`
    position: absolute;
    transform: perspective(500px) rotateX(${props => props.rotateX || 0}deg) rotateY(${props => props.rotateY || 0}deg);
    transition: all .5s;
    border-radius: 10px;
    width: 200px;
    height: 200px;
    top: 3px;
    right: 7px;
    background-color: ${props => props.theme.primaryShadowDark};
    z-index: -10;
`;