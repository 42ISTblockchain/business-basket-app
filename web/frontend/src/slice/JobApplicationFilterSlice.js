import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null
}

export const JobApplicationFilterSlice = createSlice({
    name: "jobApplicationFilter",
    initialState,
    reducers: {
        jobApplicationFilter: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {jobApplicationFilter} = JobApplicationFilterSlice.actions
export default JobApplicationFilterSlice.reducer