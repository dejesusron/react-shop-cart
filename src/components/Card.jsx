import { FaCar, FaHammer, FaDollarSign, FaTachometerAlt, FaScrewdriver } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';

const Card = (props) => {
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[props.id];

    // console.log(cartItemAmount)

  return (
    <div className="h-auto w-full cursor-pointer rounded-md overflow-hidden shadow-xl relative pb-20 group">
        <div className="w-full h-52 overflow-hidden md:h-60">
            <img className="h-full w-full object-cover group-hover:scale-125 transition-all duration-300" src={props.image} alt={props.productName} />
        </div>

        <div className="p-3">
            <div className='flex items-start gap-x-3'><FaCar className='mt-1 h-4 w-4' /><span className='font-bold text-lg'>{props.productName}</span></div>
            <div className='flex items-start gap-x-3'><FaHammer className='mt-1 h-4 w-4' />{props.manufacturer}</div>
            <div className='flex items-start gap-x-3'><FaScrewdriver className='mt-1 h-4 w-4' />{props.engine}</div>
            <div className='flex items-start gap-x-3'><FaTachometerAlt className='mt-1 h-4 w-4' />{props.transmission}</div>
            <div className='flex items-start gap-x-3'><FaDollarSign className='mt-1 h-4 w-4' />{props.price}</div>
        </div>

        <div className='px-3 p-5 mt-2 grid place-items-center absolute bottom-0 w-full'>
            <button className='p-2 bg-[#333] text-[#fff] rounded-md px-5 hover:bg-[#555] transition-all duration-300' onClick={() => {addToCart(props.id)}}>Add To Cart {cartItemAmount > 0 && <span>({cartItemAmount})</span>}</button>
        </div>
    </div>
  )
}

export default Card