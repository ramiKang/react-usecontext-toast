import React, { useEffect, useState } from "react";
import { TOAST_TYPE } from "../../../constant/Toast/toastTypes";
import StyledToastItemWrapper from "../../../style/Toast/StyledToastItemWrapper";

const ToastItem = ({ toastKey, ...props }) => {
  const { type, message, suppressAutoFadeOut } = props;

  const [toastType, setToastType] = useState(TOAST_TYPE?.SUCCESS);
  useEffect(() => {
    if (type && Object?.values?.(TOAST_TYPE)?.includes(type)) {
      setToastType(type);
    }
  }, [type]);

  return (
    <StyledToastItemWrapper $toastType={toastType} {...props}>
      {message || "TOAST MESSAGE"}
    </StyledToastItemWrapper>
  );
};

export default ToastItem;
