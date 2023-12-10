import { FaShoppingCart } from "react-icons/fa";

const CartIcon = ({ cart }) => {
    return (
        <div className="relative">
            <FaShoppingCart className="text-2xl cursor-pointer" />
            {
                cart.length > 0 && <span className="bg-red-500 text-xs w-5 h-5 text-white flex justify-center items-center rounded-full absolute -top-2 -right-4">{cart.length}</span>
            }
        </div>
    )
}

export default CartIcon