const TOGGLE_THEME = "TOGGLE_THEME";

export const toggleTheme = () => ({ type: TOGGLE_THEME });

const initialState = {
    theme: "dark",
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return state.theme === "light" ? "dark" : "light";
        default:
            return state.theme;
    }
};

export default themeReducer;
