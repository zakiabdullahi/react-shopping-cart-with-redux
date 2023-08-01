import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    total: 0
}

const productsSlice = createSlice({


    name: "products",
    initialState,

    reducers: {

        addToCart: (state, action) => {

            // const updatedProduct = state.products.concat(action.payload);
            state.products.push(action.payload);
        },
        removeFromCart: (state, action) => {

            const updatedProduct = state.products.filter(p => p.id !== action.payload.id);

            state.products = updatedProduct;

        },

        calculateTotal: (state) => {
            let total_price = 0;

            state.products.forEach(p => {

                total_price += p.price

            })

            state.total = total_price
        }

    }
})


export default productsSlice.reducer;

export const { addToCart, removeFromCart, calculateTotal } = productsSlice.actions