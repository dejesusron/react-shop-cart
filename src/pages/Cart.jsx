import Products from "../Product";
import CartItem from "../components/CartItem";
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const products = Products.map((item) => {
      if (cartItems[item.id] !== 0) {
        return <CartItem key={item.id} {...item}/>
      }
  })

  return (
    <div className="mt-16 px-3">
      <div className="text-center pt-16">
        <h1 className="text-4xl font-bold text-[#333]">Your Cart Items</h1>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-y-10 px-2 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:container lg:mx-auto">
        {products}
      </div>

      <div className="mt-12 grid place-items-center">
        <p className="text-2xl font-bold text-[#333]">Subtotal: ${totalAmount}</p>
      </div>
    </div>
  )
}

export default Cart