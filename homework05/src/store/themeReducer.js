const TOGGLE_THEME = "TOGGLE_THEME";

export const toggleTheme = () => ({ type: TOGGLE_THEME });

const initialState = {
    theme: "light",
};

export const themeReducer = (state = initialState, action) => {
    console.log(state.theme);
    switch (action.type) {
        case TOGGLE_THEME:
            return state.theme === "light" ? "dark" : "light";
        default:
            return state.theme;
    }
};
