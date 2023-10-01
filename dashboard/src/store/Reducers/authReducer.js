import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from "../../api/api.js"

export const adminLogin = createAsyncThunk(
    'auth/adminLogin',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/admin-login', info, { withCredentials: true })
            localStorage.setItem('accessToken',data.token)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: "",
        errorMessage: "",
        loader: false,
        userInfo: ""
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
            state.successMessage =""
        }
    },
    extraReducers: {
        [adminLogin.pending]: (state, _) => {
            state.loader = true
        },
        [adminLogin.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [adminLogin.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.successMessage = payload.message
        }
    }
})

export const { messageClear } = authReducer.actions
export default authReducer.reducer