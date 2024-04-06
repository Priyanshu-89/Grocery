"use client"




import { useForm } from 'react-hook-form';
import { FaUserCircle } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiSaveAs } from "react-icons/hi";

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // name: data.name,
        // email:data.email,
    };

    return (
        <div className="w-[16rem] md:container mx-auto mt-8">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-green-700 ">Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-green-200 p-3 shadow-lg hover:drop-shadow-xl transition-all duration-300 rounded-lg">
                <div className="mb-4">
                    <label className="flex gap-2 items-center text-lg font-medium text-green-600">
                        <FaUserCircle size={20} /> Name
                    </label>
                    <input
                        type="text"


                        placeholder='Enter Your Name'
                        {...register("name", {
                            required: 'Name is required',
                            minLength: { value: 3, message: 'Name should be at least 3 characters long' }
                        })}
                        className="mt-1 p-2 border w-full rounded-md outline-none"
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>

                <div className="mb-4">
                    <label className=" flex gap-2 items-center text-lg font-medium text-green-600">
                        <ImMail4 /> Email
                    </label>
                    <input
                        type="email"


                        placeholder='Enter Your Email'
                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                        className="mt-1 p-2 border w-full rounded-md"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="flex gap-2 items-center text-lg font-medium text-green-600">
                        <BiMessageRoundedDetail />Message
                    </label>
                    <textarea

                        placeholder='Type Message here'
                        {...register('message', {
                            required: 'Message is required',
                            minLength: { value: 15, message: 'Message atleast 15 character long' }
                        })}
                        className="mt-1 p-2 border w-full rounded-md outline-none"
                        rows="4"
                        cols="5"
                    />
                    {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                </div>
                <button
                    type="submit"
                    className="bg-green-500 text-green-50 flex gap-2 items-center px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300"
                ><HiSaveAs />
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
