import React from 'react'

const Cart = ({ cart, emptyCart }) => {

    const total = cart.reduce((acc, item) => acc + item.price, 0)

    if (cart.length === 0) return;

    return (

        <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">

            <h2 className="text-2xl font-semibold mb-4">Sepet</h2>

            <ul>

                {
                    cart.map((item) => {
                        return (
                            <li key={item.id} className="mt-2 flex justify-between ">
                                <span>{item.name}</span>
                                <span>{item.price} TL</span>
                            </li>
                        )
                    })
                }

            </ul>

            <hr className="my-4 bg-black h-0.5" />
            <p className="font-semibold text-lg">Toplam: {total} TL</p>

            <button onClick={() => emptyCart()} className="bg-red-500 text-white py-1.5 w-full mt-2 rounded-md font-semibold hover:bg-red-600">Sepeti Bosalt</button>

        </div>
    )
}

export default Cart