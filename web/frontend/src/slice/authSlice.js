import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: null
}

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginData: (state, action) => {
			state.value = action.payload
		}
	}
})

export const {loginData} = authSlice.actions
export default authSlice.reducer
