import { useState } from 'react'
import Button from '../components/ui/Button'
import BasicTextFields from '../components/ui/BasicTextFields';

interface authForm {
  email: string
  password:string;
  confirmPassword:string
}

const Login = () => {



  const [input, setInput] = useState<authForm>({
    email:'',
    password:'',
    confirmPassword:''
  })


  return (
    <>
      <div className=' bg-slate-900 h-[100vh] flex justify-center items-center flex-col '>
              <h1 className=' text-2xl text-white'>Login</h1>
        <div className='p-10 w-[400px] h-[300px] m-5 md:w-[500px] bg-white border-2 flex justify-center rounded-xl'>
            <div className='tex-white'>
              <BasicTextFields label="Username" variant="outlined" width={"35ch"} value={input.email} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInput({...input, email:e.target.value})}/>
              <BasicTextFields label="Password" variant="outlined" width={"35ch"} value={input.password} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInput({...input,password:e.target.value})}/>
              <div className='px-2'>
              <Button variant={"contained"} text={"Login"} color={"primary"} />
              </div>
              <a href='/register' className='px-2 text-[12px] hover:underline '>Dont have an account? Register here!</a>
            </div>
        </div>

      </div>

    </>
  )
}

export default Login
