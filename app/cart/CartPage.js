import CartItem from './CartItem';
import { useCartContext } from '../components/Context/CartContext';
// Resto de las importaciones

const CartPage = () => {
    const { cart, totalPrice } = useCartContext();

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
                {cart.map((item) =>
                    <CartItem
                        item={item}
                        key={item.slug} 
                    />
                )}
            </ul>

            <p className="text-2xl my-4 border-b pb-4 text-right">Total: ${totalPrice()}</p>
        
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Proceder al Pago
                </button>
        </div>
    );
}

export default CartPage;
