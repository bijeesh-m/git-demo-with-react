import { useState } from "react";
import toast from "react-hot-toast";


const Register = () => {

    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
        email: "",
        age: ""
    })

    const [formErrors, setFormErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validate(formValues);
        setFormErrors(errors)
        if (Object.keys(errors).length === 0) {
            //Register logic
            console.log(formValues);
            setFormValues({
                username: "",
                password: "",
                age: "",
                email: ""
            })
            toast.success("Register success!")
        }
    }



    const validate = (values) => {

        const errors = {};

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const passRegex = /^(?=.*[a-z])/


        if (!values.username) {
            errors.username = "Username cannot be empty!"
        } else if (values.username.length < 3) {
            errors.username = "Username must contain 3 characters"
        }

        if (!values.password) {
            errors.password = "password cannot be empty!"
        } else if (values.password.length < 8) {
            errors.password = "password must contain 8 characters"
        } else if (!passRegex.test(values.password)) {
            errors.password = "One lowercase letter needed"
        }

        if (!values.email) {
            errors.email = "email cannot be empty!"
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Enter a valid email address"
        }



        return errors
    }

    return (
        <div className=' h-screen flex justify-center items-center '>
            <form onSubmit={handleSubmit} className=' bg-linear-to-br from-fuchsia-600 to-violet-950 text-white rounded-sm flex flex-col gap-5 p-10 w-1/2 md:w-2/3'>
                <div className=' flex flex-col gap-2'>
                    <label className=' italic font-semibold' htmlFor="username">Username</label>
                    <input onChange={handleChange} value={formValues.username} className=' px-5 focus:border-lime-600 py-3 border-b-2 outline-none' type="text" name="username" id="username" />
                    <p className=" text-red-300 text-sm">{formErrors.username && formErrors.username}</p>
                </div>
                <div className=' flex flex-col gap-2'>
                    <label className=' italic font-semibold' htmlFor="password">Password</label>
                    <input onChange={handleChange} value={formValues.password} className=' px-5 focus:border-lime-600 py-3 border-b-2 outline-none' type="password" name="password" id="password" />
                    <p className=" text-red-300 text-sm">{formErrors.password && formErrors.password}</p>
                </div>
                <div className=' flex flex-col gap-2'>
                    <label className=' italic font-semibold' htmlFor="email">Email</label>
                    <input onChange={handleChange} value={formValues.email} className=' px-5 focus:border-lime-600 py-3 border-b-2 outline-none' type="text" name="email" id="email" />
                    <p className=" text-red-300 text-sm">{formErrors.email && formErrors.email}</p>
                </div>
                <div className=' flex flex-col gap-2'>
                    <label className=' italic font-semibold' htmlFor="age">Age</label>
                    <input onChange={handleChange} value={formValues.age} className=' px-5 focus:border-lime-600 py-3 border-b-2 outline-none' type="number" name="age" id="age" />
                </div>
                <button type='submit' className=' bg-linear-to-tr  from-lime-300 to-lime-800 rounded-sm py-3 text-black font-bold text-xl'>
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register