import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../features/products/productSlice'

const Products = () => {

    const { data, loading } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const handleDeleteProduct = (productId) => {
        dispatch(deleteProduct(productId));
        //network 
    }

    if (loading) {
        return (
            <div className=' h-screen flex justify-center items-center'>
                <div className=' w-10 h-10 border-2 border-b-0 border-blue-600 rounded-full animate-spin'></div>
            </div>
        )
    }


    return (
        <div className=' bg-slate-200 min-h-screen p-10 pt-32'>
            <h1 className=' text-4xl font-bold italic'>
                Products
            </h1>
            <div className='  grid gap-4 p-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

                {
                    data.map((product) => {
                        return (
                            <div className=' relative border p-5 flex flex-col hover:bg-linear-to-bl text-center text-white group hover:from-blue-400 hover:to-red-600 transition duration-700  bg-linear-to-br from-violet-500 to-amber-800 rounded-xl  items-center' key={product.id}>
                                <img className=' group-hover:scale-110 group-hover:rotate-3 transition duration-300' src={product.thumbnail} alt={product.title} />
                                <h1 className=' font-bold text-xl'>{product.title}</h1>
                                <button onClick={() => handleDeleteProduct(product.id)} className=' cursor-pointer absolute right-5'>
                                    <FaTrash size={25} color='red' />
                                </button>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Products