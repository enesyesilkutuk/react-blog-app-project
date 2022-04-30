import "./App.css";
import AuthContextProvider from "./context/AuthContextProvider";
import BlogContextProvider from "./context/BlogContextProvider";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BlogContextProvider>
        <AuthContextProvider>
          <AppRouter />
          <ToastContainer />
        </AuthContextProvider>
      </BlogContextProvider>
    </div>
  );
}

export default App;
