import { configureStore } from "@reduxjs/toolkit";
import tmdbReducer from "@/store/Reducers/tmdbReducer";
import showReducer from "@/store/Reducers/showReducer"
export const store = configureStore({
    reducer: {
        tmdbReducer,
        showReducer
    },
});

