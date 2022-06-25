import {configureStore} from '@reduxjs/toolkit';
import jobListReducer from "../slice/JobListSlice";

export const store = configureStore({
	reducer : {
		jobList: jobListReducer,
	}
})