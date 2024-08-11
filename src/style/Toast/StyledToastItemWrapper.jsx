import styled, { css } from "styled-components";
import { TOAST_TYPE } from "../../constant/Toast/toastTypes";

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
