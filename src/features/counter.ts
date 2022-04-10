import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        update: (state) => {
            state.count += 1;
        }
    },

});

export const { update } = counterSlice.actions;
export default counterSlice.reducer;
