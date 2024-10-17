import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeReducer";

const MainPage = () => {
    const { theme } = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <div className={"App App-" + theme}>
            <header>
                <h1>HELLO WORLD!!!</h1>
                <button onClick={() => dispatch(toggleTheme())}>
                    Изменить тему оформления на {theme === "light" ? "dark" : "light"}
                </button>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat numquam nihil, vel non eaque
                    consequuntur deleniti. Sit, impedit. Quas officiis molestiae laborum dolorum? Maiores beatae
                    assumenda, ad, consequatur illo, eius deleniti fuga similique laudantium dolorem totam et saepe! Aut
                    sunt esse animi temporibus impedit et dolor facilis minus, voluptas quod.
                </p>
            </header>
        </div>
    );
};

export default MainPage;
