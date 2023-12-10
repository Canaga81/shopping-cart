import React from 'react'

const ProductItem = ({product, setCart}) => {

    const addToCart = (product) => {
        setCart((prevState) =>[...prevState, product])
    }

    return (
        <div className="border p-4 m-2 rounded-lg shadow-lg">
            <img className="w-full h-48 object-cover rounded-t-lg" src={product.image} alt="product-image" />

            <div>
                <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
                <p className="my-2 text-gray-500">{product.price} TL</p>
                <button className="bg-blue-500 w-full text-white px-4 py-1.5 rounded-md hover:bg-blue-600" onClick={() => addToCart(product)}>
                    Sepete Ekle
                </button>
            </div>
        </div>
    )
}

export default ProductItem