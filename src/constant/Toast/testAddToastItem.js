import { TOAST_TYPE } from "./toastTypes";

const TEST_ADD_TOST_ITEM = [
  {
    buttonFunctionItem: {
      message: "SUCCESS TOAST",
      type: TOAST_TYPE?.SUCCESS,
    },
    buttonLabel: "성공(자동 사라짐)",
  },
  {
    buttonFunctionItem: {
      message: "ERROR TOAST",
      type: TOAST_TYPE?.ERROR,
    },
    buttonLabel: "실패(자동 사라짐)",
  },
  {
    buttonFunctionItem: {
      message: "WARNING TOAST",
      type: TOAST_TYPE?.WARNING,
    },
    buttonLabel: "경고(자동 사라짐)",
  },
  {
    buttonFunctionItem: {
      message: "SUCCESS TOAST",
      type: TOAST_TYPE?.SUCCESS,
      suppressAutoFadeOut: true,
    },
    buttonLabel: "성공(자동 사라짐 X)",
  },
  {
    buttonFunctionItem: {
      message: "ERROR TOAST",
      type: TOAST_TYPE?.ERROR,
      suppressAutoFadeOut: true,
    },
    buttonLabel: "실패(자동 사라짐 X)",
  },
  {
    buttonFunctionItem: {
      message: "WARNING TOAST",
      type: TOAST_TYPE?.WARNING,
      suppressAutoFadeOut: true,
    },
    buttonLabel: "경고(자동 사라짐 X)",
  },
];

export default TEST_ADD_TOST_ITEM;
