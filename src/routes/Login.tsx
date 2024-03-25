import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface authForm {
  email: string
  password:string;
  confirmPassword:string
}

const Login:React.FC = () => {

  const [input, setInput] = useState<authForm>({
    email:'',
    password:'',
    confirmPassword:''
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setInput((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const navigate = useNavigate()


  const handleAuth = () => {
    if( !input.email || !input.password) {
    alert("Please Fill all the fields");
    return
    }
    navigate("/");
  }


  return (
    <>
      <div className=' bg-slate-900 h-[100vh] flex justify-center items-center flex-col '>
              <h1 className=' text-2xl text-white'>Login</h1>
        <div className='p-10 w-[400px] h-[300px] m-5 md:w-[500px] bg-[#1C1F33]  flex justify-center rounded-xl'>
            <div className=' flex justify-center flex-col'>
              <input value={input.email} type='text' name='email' onChange={handleChange} placeholder='Email' className=' bg-slate-400 w-[17rem] rounded-md p-2 m-2 placeholder-black placeholder:opacity-65'/>
              <input value={input.password} type='password' name='password' onChange={handleChange} placeholder='password' className=' bg-slate-400 w-[17rem] rounded-md p-2 m-2 placeholder-black placeholder:opacity-65'/>
              <div className='p-2 '>
              <button onClick={handleAuth} name={'button'} className=' bg-indigo-500 py-2 p-4 rounded-md'>Login</button>
              </div>
              <a href='/register' className='p-2 text-[12px] hover:underline '>Dont have an account? Register here!</a>
            </div>
        </div>

      </div>

    </>
  )
}

export default Login
