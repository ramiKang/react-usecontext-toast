import styled, { css, keyframes } from "styled-components";
import { TOAST_TYPE } from "../../constant/Toast/toastTypes";

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledToastItemWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 250px;
  height: 30px;
  border-radius: 0.5rem;
  background-color: #f56565;

  padding: 0.75rem;
  color: #ffffff;
  font-size: 12px;
  margin-bottom: 5px;

  ${(props) =>
    !props?.suppressAutoFadeOut &&
    css`
      animation: ${fadeOut} ${props?.$toastTime}ms ease-in-out;
      animation-fill-mode: forwards;
    `}

  ${(props) =>
    props?.$toastType === TOAST_TYPE?.SUCCESS &&
    css`
      background-color: #006400;
    `}

  ${(props) =>
    props?.$toastType === TOAST_TYPE?.ERROR &&
    css`
      background-color: #dd3b11;
    `}
      ${(props) =>
    props?.$toastType === TOAST_TYPE?.WARNING &&
    css`
      background-color: #ff9300;
    `};
`;

export default StyledToastItemWrapper;
