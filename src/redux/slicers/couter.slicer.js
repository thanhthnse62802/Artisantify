import { createSlice } from "@reduxjs/toolkit"


const counterSlicer = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increase: state => {
            state.value += 1
        },
        decrease: state => {
            state.value -= 1
        },
        reset: state => {
            state.value = 0
        }
    }
})


// action export
export const { increase, decrease, reset } = counterSlicer.actions


// use-selector export 
export const selectCount = (state) => state.counter.value;

// reducer export
export default counterSlicer.reducer