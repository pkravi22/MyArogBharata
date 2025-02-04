import React from 'react'

import logo from "../../assets/footerLogo.webp";
const Login = () => {
  return (
    <>
    <div className='flex flex-col-reverse md:flex-row justify-center  items-center font-inter p-2 md:p-12 '>
        {/* form */}
        <div className='mt-6 flex   w-full md:w-1/2 flex-col gap-4 md:border-r-2 border-gray-300 justify-center items-center'>
            <div>
                <h1 className='text-4xl  leading-[normal] text-center flex items-center tracking-normal text-[#1F1F1F] uppercase font-bold '>Login</h1>
               
            </div>
            <div className='w-full justify-center mx-auto'>
                <form className='flex w-3/4 mx-auto  flex-col gap-4'>
                    <div className='flex w-full flex-col gap-2 '>
                        <label>Username</label>
                        <input type="email" placeholder="Enter Email"  className='p-2  border border-black bg-white outline-none rounded-[2px]'/>
                    </div>
                    <div className='flex w-full flex-col gap-2'>
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password"  className='p-2  border border-black bg-white outline-none rounded-[2px]'/>
                    </div>
                   <div className='flex text-sm justify-end '>
                         <p>Forgot password ?</p>
                         <p><a href="#" className='text-blue-500'>Reset password</a></p>
                   </div>
                    <button className='flex justify-center items-center  py-2 bg-[#1858F9] text-[25px]'>Login</button>
                    <div className='text-sm flex justify-center '>Not login yet?<span><a href="#" className='text-blue-500'>Register now</a></span></div>
                </form>
            </div>
        </div>
        {/* logo */}
        <div className='   flex w-full md:w-1/2 p-8  md:p-16 justify-center items-center'>
            <img src={logo} alt="logo" className='w-[400px]' />
        </div>
    </div>

    </>
  )
}

export default Login