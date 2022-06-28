import {configureStore} from '@reduxjs/toolkit';
import jobListReducer from "../slice/JobListSlice";
import authReducer from "../slice/authSlice";
import genericReducer from '../slice/genericSlice';

export const store = configureStore({
	reducer : {
		auth: authReducer,
		jobList: jobListReducer,
		genericValue: genericReducer
	}
})
