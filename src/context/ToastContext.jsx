import React, { createContext, useCallback, useMemo, useState } from "react";

export const ToastContext = createContext({
  toastList: [],
  addToast: () => {},
  removeToast: () => {},
});

export const ToastProvider = ({ children }) => {
  const [toastList, setToastList] = useState([]);
  const [toastKey, setToastKey] = useState(0);

  const addToast = useCallback(
    ({ ...toastProps }) => {
      const newToastList = [...toastList, { key: toastKey, ...toastProps }];
      setToastList(newToastList);
      setToastKey((prev) => prev + 1);
    },
    [toastList, toastKey]
  );

  const removeToast = useCallback(
    (removedToastKey) => {
      setToastList((prev) =>
        [...prev]?.filter((toast) => toast?.key !== removedToastKey)
      );
    },
    [toastList]
  );

  const toastProviderValue = useMemo(
    () => ({ toastList, addToast, removeToast }),
    [toastList]
  );

  return (
    <ToastContext.Provider value={toastProviderValue}>
      {children}
    </ToastContext.Provider>
  );
};
