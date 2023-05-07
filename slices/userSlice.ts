import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { user } from '@/pages'

interface userState{
    value: user;
}

const initialState: userState = {
    value: {
        displayName: "",
        uid: "",
        photoURL: "",
        email: ""
    }
}


export const userSlice = createSlice({
    name: "user", 
    initialState,
    reducers: {
        login: (state, action: PayloadAction<user>) => {
            state.value = action.payload
        },

        signOut: (state) =>  {
            state.value.displayName ="",
            state.value.uid="",
            state.value.photoURL="",
            state.value.email=""
        }

    }

})

export const { login, signOut } = userSlice.actions

export default userSlice.reducer