import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: []
}

export const JobApplicationListSlice = createSlice({
	name: "jobApplication",
	initialState,
	reducers: {
		loadData: (state, action) => {
			state.value = action.payload
		}
	}
})

export const {loadData} = JobApplicationListSlice.actions
export default JobApplicationListSlice.reducer