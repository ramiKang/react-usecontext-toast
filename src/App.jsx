import Toast from "./component/Toast";
import { ToastProvider } from "./context/ToastContext";
import TestPage from "./page/TestPage";

function App() {
  return (
    <ToastProvider>
      <Toast />
      <TestPage />
    </ToastProvider>
  );
}

export default App;
