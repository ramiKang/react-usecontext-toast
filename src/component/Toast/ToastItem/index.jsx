import React, { useEffect, useState } from "react";
import { TOAST_TYPE } from "../../../constant/Toast/toastTypes";
import StyledToastItemWrapper from "../../../style/Toast/StyledToastItemWrapper";
import useControlToast from "../../../hook/Toast/useControlToast";

const ToastItem = ({ toastKey, ...props }) => {
  const TOAST_FLOATING_TIME = 3000;
  const { removeToast } = useControlToast();

  const { type, message, suppressAutoFadeOut } = props;

  const [toastType, setToastType] = useState(TOAST_TYPE?.SUCCESS);
  useEffect(() => {
    if (type && Object?.values?.(TOAST_TYPE)?.includes(type)) {
      setToastType(type);
    }
  }, [type]);

  useEffect(() => {
    if (!suppressAutoFadeOut) {
      const toastTimer = setTimeout(() => {
        removeToast(toastKey);
      }, TOAST_FLOATING_TIME);

      return () => {
        if (!suppressAutoFadeOut) {
          clearTimeout(toastTimer);
        }
      };
    }
    return () => {};
  }, [suppressAutoFadeOut]);

  return (
    <StyledToastItemWrapper
      $toastType={toastType}
      $toastTime={TOAST_FLOATING_TIME}
      {...props}
    >
      {message || "TOAST MESSAGE"}
      <div
        className="cursor-pointer"
        onClick={() => {
          removeToast(toastKey);
        }}
      >
        X
      </div>
    </StyledToastItemWrapper>
  );
};

export default ToastItem;
