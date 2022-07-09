import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: []
}

export const JobApplicationListSlice = createSlice({
	name: "jobApplication",
	initialState,
	reducers: {
		jobApplicationDatas: (state, action) => {
			state.value = action.payload
		}
	}
})

export const {jobApplicationDatas} = JobApplicationListSlice.actions
export default JobApplicationListSlice.reducer