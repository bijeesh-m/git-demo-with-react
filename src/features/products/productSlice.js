import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    data: [],
    loading: true
}

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        loadProducts: (state, action) => {
            state.data = action.payload
            state.loading = false;
        },
        deleteProduct: (state, action) => {
            const productId = action.payload
            state.data = state.data.filter((product) => product.id !== productId)
        }
    }
})


export const { loadProducts, deleteProduct } = productSlice.actions
export default productSlice.reducer