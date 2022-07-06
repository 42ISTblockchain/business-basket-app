import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	allJob: [],
	currentJob: null
}

export const jobListSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		allJobAction: (state, action) => {
			state.allJob = action.payload
		},
		currentJobAction: (state, action) => {
			state.currentJob = action.payload
		}
	}
})

export const {allJobAction, currentJobAction} = jobListSlice.actions
export default jobListSlice.reducer