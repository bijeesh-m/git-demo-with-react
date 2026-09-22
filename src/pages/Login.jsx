import { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        //login logic
        console.log(username, password);
        
        setPassword("");
        setUsername("")
    }

    return (
        <div className=' h-screen flex justify-center items-center '>
            <form onSubmit={handleSubmit} className=' bg-linear-to-br from-fuchsia-600 to-violet-950 text-white rounded-sm flex flex-col gap-5 p-10 w-1/2 md:w-1/3'>
                <div className=' flex flex-col gap-2'>
                    <label className=' italic font-semibold' htmlFor="username">Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className=' px-5 focus:border-lime-600 py-3 border-b-2 outline-none' type="text" name="username" id="username" />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label className=' italic font-semibold' htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className=' px-5 focus:border-lime-600 py-3 border-b-2 outline-none' type="password" name="password" id="password" />
                </div>
                <button type='submit' className=' bg-linear-to-tr  from-lime-300 to-lime-800 rounded-sm py-3 text-black font-bold text-xl'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login