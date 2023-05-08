import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const tweetSlice = createSlice ({
    name: "tweet",
    initialState: false,
    reducers: {
        tweetAdded: (state) => (!state)

    }
})

export const {tweetAdded} =  tweetSlice.actions;
export default tweetSlice.reducer;