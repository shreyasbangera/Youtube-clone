import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSidebarOpen: false,
        searchQuery:"",
    },
    reducers:{
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        search: (state, action) =>{
            state.searchQuery = action.payload;
        }
    }

})

export const {toggleSidebar, search} = appSlice.actions;
export default appSlice.reducer;