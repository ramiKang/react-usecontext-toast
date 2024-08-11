import React from "react";
import useControlToast from "../hook/Toast/useControlToast";
import TEST_ADD_TOST_ITEM from "../constant/Toast/testAddToastItem";

const TestPage = () => {
  const { addToast } = useControlToast();

  return (
    <div className="p-3">
      <div className="font-[700] text-[30px]">TOAST LIST 구현</div>
      {TEST_ADD_TOST_ITEM?.map((testItem, index) => (
        <div className="w-[150px] bg-red-200 mt-[5px]">
          <button
            key={String(index + 1)}
            type="button"
            onClick={() => {
              addToast({ ...testItem?.buttonFunctionItem });
            }}
          >
            {testItem?.buttonLabel}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TestPage;
