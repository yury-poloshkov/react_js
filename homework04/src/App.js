import "./App.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav className="Navigation">
                    <NavLink className="Navigation__item" to="/">
                        Главная страница
                    </NavLink>
                    <NavLink className="Navigation__item" to="about">
                        О нас
                    </NavLink>
                </nav>
                <Routes>
                    <Route exact path="/" element={<HomePage />}></Route>
                    <Route exact path="about" element={<AboutPage />}></Route>
                    <Route path="*" element={<h2>ERROR 404: Page not found!"</h2>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
