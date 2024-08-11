import React, { useEffect, useState } from "react";
import ToastItemWrapper from "../../../style/Toast/ToastItemWrapper";
import { TOAST_TYPE } from "../../../constant/Toast/toastTypes";

const ToastItem = ({ toastKey, ...props }) => {
  const { type, message, suppressAutoFadeOut } = props;

  const [toastType, setToastType] = useState(TOAST_TYPE?.SUCCESS);
  useEffect(() => {
    if (type && Object?.values?.(TOAST_TYPE)?.includes(type)) {
      setToastType(type);
    }
  }, [type]);

  return (
    <ToastItemWrapper $toastType={toastType} {...props}>
      {message || "TOAST MESSAGE"}
    </ToastItemWrapper>
  );
};

export default ToastItem;
