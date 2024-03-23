import React from 'react'
import background from '../assets/login-background.jpg'
import Input from '../components/ui/BasicTextFields'

const Login = () => {
  return (
    <>
      <div className=' bg-slate-900 h-[100vh] flex justify-center items-center flex-col '>
              <h1 className=' text-2xl text-white'>Login</h1>
        <div className='p-10 w-[400px] h-[300px] m-5 md:w-[500px] bg-white border-2 flex justify-center rounded-xl'>
            <div className='tex-white'>
              <Input label="Username" variant="outlined" width={"35ch"}/>
            </div>
        </div>

      </div>

    </>
  )
}

export default Login
