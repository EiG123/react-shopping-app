import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/products";
import cartReducer from "../reducer/cartReducer";
const CartContext = createContext()
const initState={
    products:products,
    total:0,
    amount:0
}

export const CartProvider=({children})=>{
    const [state, dispatch] = useReducer(cartReducer, initState)
    function formatMoney(money){//แปลงตัวเลขให้มี ,
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    //ลบสินค้า
    function removeItem(id){
        dispatch({type:"REMOVE",payload:id})
    }

    //เพิ่มสินค้า
    function addQuantity(id){
        dispatch({type:"ADD", payload:id})
    }

    useEffect(()=>{
        dispatch({type:"CALCULATE_TOTAL"})
    },[state.products]);
    return(
        <CartContext.Provider value={{...state, formatMoney, removeItem, addQuantity}}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart=()=>{
    return useContext(CartContext)
}