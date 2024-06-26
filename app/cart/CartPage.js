import CartItem from './CartItem';
import { useCartContext } from '../components/context/CartContext';

const CartPage = () => {
    const { cart, totalPrice } = useCartContext();

    return (
        <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
                {cart.map((item) =>
                    <CartItem
                        item={item}
                        key={item.slug} 
                    />
                )}
            </ul>

            <p className="text-lg md:text-2xl my-4 md:border-b pb-4 text-right">Total: ${totalPrice()}</p>
        </div>
    );
}

export default CartPage;
