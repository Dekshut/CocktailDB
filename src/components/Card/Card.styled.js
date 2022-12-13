import styled from 'styled-components';

export const Card = styled.div`
    padding: 25px;
    border-radius: 30px;
    background: ${props => props.theme.primary};
    box-shadow: inset 10px 10px 30px ${props => props.theme.primaryShadowDark},
        inset -10px -10px 30px ${props => props.theme.primaryShadowLight};

    &:hover{
        & .card-btn{
            transform: translateX(0px);
        }
    }
`;

export const CardContent = styled.div`
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 7px 7px 21px ${props => props.theme.primaryShadowDark},
    -7px -7px 21px ${props => props.theme.primaryShadowLight};
    position: relative;
    height: 280px;
`;

export const CardImg = styled.img`
    object-fit: cover;
    width: 100%;
`;

export const CardText = styled.div`
    padding: 10px;
    text-align: center;
    font-size: 20px;
    width: 240px;
    left: 20px;
    border-radius: 10px;
    bottom: 20px;
    background: #F7F6F2;  
    color: #4B6587;
    position: absolute;
    border: 1px solid #4B6587;
    transition: all .3s;
`;

export const CardBtn = styled.div`
    transform: translateX(-270px);
    transition: all .3s;
    height: 100%;

    & button{
        width: 240px;
        height: 100%;   
    }
`;

export const CardBox = styled.div`
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    bottom: 20px;
    left: 20px;
    height: ${props => props.height + 2}px;
    width: 240px;
    z-index: 5;
`;

export const CardHeart = styled.div`
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
    background-color: #4B6587;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover{
        & svg{
            animation: pulse 1s infinite;
        }
    }

    & svg{
        width: 25px;
        height: 25px;
        fill: ${props => props.checked ? '#ff4d4f' : '#F7F6F2'}
    }

    @keyframes pulse {
	    10% {transform: scale(1.1)}
    }
`;