import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        // decrement:
    }
})


export const { increment } = counterSlice.actions
export default counterSlice.reducer





