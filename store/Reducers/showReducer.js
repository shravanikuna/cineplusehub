import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    shows:[],
    page:1,
    errors:[]
};

export const showReducer = createSlice({
    name:'Show',
    initialState,
    reducers:{
        addshows:(state,action) =>{
            state.shows=action.payload;
        },
        adderrors:(state,action)=>{
            state.errors.push(action.payload);
        },
        removeerrors:(state,action)=>{
            state.errors=[];
        },
        changepage:(state,action)=>{
            state.page +=action.payload;
        }
    }
});

export default showReducer.reducer;
export const {addshows,adderrors,removeerrors,changepage}=showReducer.actions;