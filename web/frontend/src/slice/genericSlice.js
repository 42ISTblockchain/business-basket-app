import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cities: [],
	categories: []
}

export const genericSlice = createSlice({
	name: "generic",
	initialState,
	reducers: {
		loadGenericCities: (state, action) => {
			state.cities = action.payload
		},

		loadGenericCategories: (state, action) => {
			state.categories = action.payload
		}
	}
})

export const {loadGenericCities, loadGenericCategories} = genericSlice.actions
export default genericSlice.reducer