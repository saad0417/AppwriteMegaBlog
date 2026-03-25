import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: false,
        userData: null,
        loading: true // ← Add this
    },
    reducers: {
        login: (state, action) => {
            state.status = true
            state.userData = action.payload
            state.loading = false // ← Add this
        },
        logout: (state) => {
            state.status = false
            state.userData = null
            state.loading = false // ← Add this
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;