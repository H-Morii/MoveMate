import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface authForm {
  email: string
  password:string;
}

const LOCALDB_URL = import.meta.env.VITE_LOCALDB_URL;

const Login:React.FC = () => {

  const [authInput, setAuthInput] = useState<authForm>({
    email:'',
    password:''
  })
  const navigate = useNavigate()


  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setAuthInput((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };



  const handleAuthSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if( !authInput.email || !authInput.password) {
    alert("Please Fill all the fields");
    return
    }
    try {
      axios.defaults.withCredentials = true
      const response = await axios.post(`${LOCALDB_URL}login` , authInput)
      const { token } = response.data
      console.log(token)
      localStorage.setItem('jwtToken', token)
      console.log('login successfull')
      navigate('/')
    } catch (err:any) {
      console.error(err.message);

    }
  }


  return (
    <>
    <form action="">
      <div className=' bg-slate-900 h-[100vh] flex justify-center items-center flex-col '>
              <h1 className=' text-2xl text-white'>Login</h1>
        <div className='p-10 w-[400px] h-[300px] m-5 md:w-[500px] bg-[#1C1F33]  flex justify-center rounded-xl'>
            <div className=' flex justify-center flex-col'>
              <input value={authInput.email} required type='text' name='email' onChange={handleChange} placeholder='Email' className=' bg-slate-400 w-[17rem] rounded-md p-2 m-2 placeholder-black placeholder:opacity-65'/>
              <input value={authInput.password} required type='password' name='password' onChange={handleChange} placeholder='password' className=' bg-slate-400 w-[17rem] rounded-md p-2 m-2 placeholder-black placeholder:opacity-65'/>
              <div className='p-2 '>
              <button onClick={handleAuthSubmit} name={'button'} className=' bg-indigo-500 py-2 p-4 rounded-md'>Login</button>
              </div>
              <a href='/register' className='p-2 text-[12px] hover:underline '>Dont have an account? Register here!</a>
            </div>
        </div>
      </div>
    </form>
    </>
  )
}

export default Login
