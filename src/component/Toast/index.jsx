import React, { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";
import ToastItem from "./ToastItem";
import StyledCommonToastBackGround from "../../style/Toast/StyledCommonToastBackGround";

const Toast = () => {
  const { toastList } = useContext(ToastContext);

  return (
    toastList?.length > 0 && (
      <StyledCommonToastBackGround>
        {toastList?.map((toast) => (
          <ToastItem key={toast.key} {...toast} />
        ))}
      </StyledCommonToastBackGround>
    )
  );
};

export default Toast;
