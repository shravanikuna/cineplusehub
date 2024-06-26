import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    page: 1,
    errors: [],
};
export const tmdbReducer = createSlice({
    name: "tmdb",
    initialState,
    reducers: {
        addmovies: (state, action) => {
            state.movies = action.payload;
        },
        adderrors: (state, action) => {
            state.errors.push(action.payload);
        },
        removeerrors: (state) => {
            state.errors = [];
        },
        changepage: (state, action) => {
            state.page += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addmovies, adderrors, changepage, removeerrors } =
    tmdbReducer.actions;
export default tmdbReducer.reducer;



