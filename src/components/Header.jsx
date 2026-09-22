import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {


    const { count } = useSelector((state) => state.counter)


    return (
        <div className=' fixed z-40 w-full bg-black text-white px-20 py-5 flex justify-between'>
            <h1 className=' text-3xl font-bold '>
                Brand
            </h1>
            <h1 className=' text-3xl font-bold '>
                Count : {count}
            </h1>
        </div>
    )
}

export default Header