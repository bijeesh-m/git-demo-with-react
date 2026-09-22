import { useDispatch, useSelector } from "react-redux"
import { increment } from "../features/counter/counterSlice"

const Counter = () => {

    const { count } = useSelector((state) => state.counter)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }

    return (
        <div className=" bg-amber-100 h-screen flex justify-center items-center gap-40">
            <button className="  bg-red-500 text-xl font-bold text-white rounded-full px-20 py-5 ">
                Decrement
            </button>
            <h1 className=" font-black text-[300px]">{count}</h1>
            <button onClick={handleIncrement} className=" bg-green-500 text-xl font-bold text-white rounded-full px-20 py-5 ">
                Increment
            </button>
        </div>
    )
}

export default Counter