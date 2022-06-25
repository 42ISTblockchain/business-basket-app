import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: []
}

export const jobListSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		loadData: (state, action) => {
			state.value = action.payload
		}
	}
})

export const {loadData} = jobListSlice.actions
export default jobListSlice.reducer