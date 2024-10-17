import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeReducer";

const MainPage = () => {
    const { theme } = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    console.log(theme + " from MainPage Coponent");
    return (
        <div className="App App-light">
            <header>
                <h1>HELLO WORLD!!!</h1>
                <button onClick={() => dispatch(toggleTheme)}>Изменить тему оформления на {theme}</button>
                <p>text text text text text text text text text text text text text text text text </p>
            </header>
        </div>
    );
};

export default MainPage;
