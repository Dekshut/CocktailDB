import styled from 'styled-components';

export const Loader = styled.div`
  width: 48px;
  height: 48px;
  margin: auto;
  position: relative;

&:before {
  content: '';
  width: 48px;
  height: 5px;
  background: #4B658750;
  position: absolute;
  top: 60px;
  left: 0;
  border-radius: 50%;
  animation: shadow324 0.5s linear infinite;
}

&:after {
  content: '';
  width: 100%;
  height: 100%;
  background: #4B6587;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  animation: jump7456 0.5s linear infinite;
}

@keyframes jump7456 {
  15% {
    border-bottom-right-radius: 3px;
  }

  25% {
    transform: translateY(9px) rotate(22.5deg);
  }

  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }

  75% {
    transform: translateY(9px) rotate(67.5deg);
  }

  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow324 {

  0%,
    100% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.2, 1);
  }
}
`;

export const LoaderOverlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #F7F6F2;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-content: center;
  justify-content: center;
`; 