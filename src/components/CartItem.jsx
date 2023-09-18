import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';

const CartItem = (props) => {
    const { addToCart, removeFromCart, cartItems, updateItemCount } = useContext(ShopContext);

    const cartItemAmount = cartItems[props.id];

  return (
    <div className="h-auto w-full cursor-pointer rounded-md overflow-hidden shadow-2xl relative group flex">
        <div className="w-full h-40 overflow-hidden sm:h-52 sm:w-full">
            <img className="h-full w-full object-cover group-hover:scale-125 transition-all duration-300" src={props.image} alt={props.productName} />
        </div>

        <div className="p-3 pl-5 w-full relative">
            <h2 className='flex items-start gap-x-3 font-bold'>{props.productName}</h2>
            <p className='flex items-start gap-x-3'>${props.price}</p>

            <div className="flex absolute bottom-4 left-[50%] translate-x-[-50%] gap-x-1">
                <button className="px-2 border-2 border-[#333]" onClick={() => {removeFromCart(props.id)}}>-</button>
                <input className="bg-[#ddd] border-2 border-[#333] w-12 text-center" type="text" value={cartItemAmount} onChange={(event) => updateItemCount(Number(event.target.value), props.id)}/>
                <button className="px-2 border-2 border-[#333]" onClick={() => {addToCart(props.id)}}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem;