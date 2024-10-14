import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { MainPage } from "./MainPage/MainPage";

function App() {
    return (
        <Provider store={store}>
            <MainPage />
        </Provider>
    );
}

export default App;
