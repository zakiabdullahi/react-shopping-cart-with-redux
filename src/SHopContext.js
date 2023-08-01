// import { createContext, useContext, useReducer } from "react";
// import shopReducer from "./shopReducer";

// import { initailState } from "./shopReducer";


// const ShopContext = createContext(initailState);


// export const ShopProvider = ({ children }) => {

//     const [state, dispatch] = useReducer(shopReducer, initailState);

//     const addToCart = (product) => {

//         const updatedProduct = state.products.concat(product);
//         calculateTotal(updatedProduct);


//         dispatch({
//             type: "ADD_TO_CART",
//             payload: { products: updatedProduct }
//         })

//     }
//     const removeFromCart = (product) => {

//         const updatedProduct = state.products.filter(p => p.id !== product.id);
//         calculateTotal(updatedProduct);

//         dispatch({
//             type: "REMOVE_FROM_CART",
//             payload: { products: updatedProduct }
//         })
//     }

//     const calculateTotal = (products) => {
//         let total = 0;


//         products.forEach(p => {

//             total += p.price;
//         })


//         dispatch({
//             type: "CALCULATE_TOTAL_PRICE",
//             payload: total,
//         })




//     }


//     const values = {

//         products: state.products,
//         total: state.total,
//         addToCart,
//         removeFromCart

//     }



//     return <ShopContext.Provider value={values}>
//         {children}

//     </ShopContext.Provider>

// }


// const useShop = () => {

//     const context = useContext(ShopContext);

//     if (context === undefined) {
//         throw new Error("useShop must be used within a ShopProvider")
//     }

//     return context;
// }

// export default useShop;