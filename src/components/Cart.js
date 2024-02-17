import Item from "./Item";
import { useCart } from "../context/CartContext.js";
export default function Cart(){
    const {products} = useCart()
    return(
        <div className="cart">
            {products.map((data)=>{
                return <Item kay={data.id} {...data}/>
            })}
        </div>
    );
}