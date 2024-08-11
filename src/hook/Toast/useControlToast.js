import React, { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";

const useControlToast = () => {
  const toastContext = useContext(ToastContext);

  return { ...toastContext };
};

export default useControlToast;
