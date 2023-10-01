import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import api from "../../api/api.js"

export const adminLogin = createAsyncThunk(
    'auth/adminLogin',
    async (info)=>{
        try {
            // const {data} = await api.post('/admin-login',info,{withCredentials:true})
            // console.log(data)
            console.log("jlasdfjlsdajf;");
            console.log(info)
        } catch (error) {
            
        }
    }
)

export const authReducer = createSlice({
    name:"auth",
    initialState:{
        successMessage:"",
        errorMessage:"",
        loader:false,
        userInfo:""
    },
    reducers:{

    },
    extraReducers:{

    }
})

export default authReducer.reducer