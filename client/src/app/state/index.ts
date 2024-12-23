import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
	isSidebarCollapsed: boolean;
	isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
	isSidebarCollapsed: false,
	isDarkMode: false,
};

export const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setIsSidebardCollapsed: (state, action: PayloadAction<boolean>) => {
			state.isSidebarCollapsed = action.payload;
		},
		setIsDarkMode: (state, action: PayloadAction<boolean>) => {
			state.isDarkMode = action.payload;
		},
	},
});

export const { setIsDarkMode, setIsSidebardCollapsed } = globalSlice.actions;

export default globalSlice.reducer;
