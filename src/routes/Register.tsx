import React, {useState, useEffect} from 'react'
import Select from "react-select";
import { Link } from 'react-router-dom';
import axios from'axios'

interface OptionType {
  value: string;
  label: string;
}

interface RegisterType {
  email: string;
  passwordHash: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  birthDate: string;
  country: string | null;
  postalCodePart1: string;
  postalCodePart2: string;
  city: string;
  ward: string;
  address: string;
  apartment: string;
  driverLicenseNumber: string;
  company:string;
}

// interface TempPass {
//   tempPass: string
// }


const LOCALDB_URL = import.meta.env.VITE_LOCALDB_URL;

const Register = () => {
  //User or Driver register
  const [type, setType] = useState('')

  // Country dropdown
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<OptionType | null>(null);

  //Radio for normal user and driver.
  const [selectedOption, setSelectedOption] = useState<string>('option1');

  //Password checker
  const [tempPass, setTempPass] = useState<string>('')
  const [passErrorMessage, setPassErrorMessage] = useState(false)

  //Email checker
  const [emailErrorMessage, setEmailErrorMessage] = useState(false)

  //Registration useState
  const [registrationData, setRegistrationData] = useState<RegisterType>({
  email: '',
  passwordHash: '',
  firstName: '',
  middleName: '',
  lastName: '',
  phoneNumber: '',
  birthDate: '',
  country: null,
  postalCodePart1: '',
  postalCodePart2: '',
  city: '',
  ward: '',
  address: '',
  apartment: '',
  driverLicenseNumber: '',
  company: '',
  })

  //Temp password checker


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      //Email validation checker
      const emailRegex = /\S+@\S+\.\S+/;
      if(!emailRegex.test(registrationData.email)){
        setEmailErrorMessage(!emailErrorMessage)
        alert("Please enter a valid email")
        return
      }

      // Password validation checker
      const pwdRegex =/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      if(registrationData.passwordHash !== tempPass) {
        setPassErrorMessage(!passErrorMessage)
        alert("Password did not match")
        return
      } else if (!pwdRegex.test(registrationData.passwordHash)){
        alert("Please enter a valid password")
      }



    try {
      axios.defaults.withCredentials = true;

      const submitData = {
        ...registrationData,
        birthDate: new Date(registrationData.birthDate).toISOString()
      }

      const response = await axios.post(`${LOCALDB_URL}user`, submitData)
      console.log("Success: ", response.data);

      console.log('Submitted Data: ', submitData)
    } catch (err:any) {
      if(axios.isAxiosError(err))
      console.error('Axios error data: ',err.message);
    }
  }

  //ChangeInput for creating a user
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value === null) {
      // Handle the case where the date is not set
      console.error('Date value is null');
      return;
    }

    // Adjust the value if it's the birth date
    // const adjustedValue = name === 'birthDate' ? new Date(value).toISOString() : value;
  
    // Update state once per change with the correct value
    setRegistrationData(prevData => ({
      ...prevData,
      [name]: value,
      country: selectedCountry ? selectedCountry?.label : null
    }));
  };


  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);


  return (
    <>
      <div className='flex justify-center items-center w-full py-10 px-4'>
        <div className='w-[360px]'>
        <header>
          <div className=' text-center '>
            <h1 className='text-3xl'>MoveMate</h1>
          </div>
        </header>
        {!type ? <div className='flex justify-around mt-6'>
          <button className=' px-7 py-4 rounded-[25px] text-[#424242] shadow-whiteShadow active:shadow-hoverWhiteShadow' value="User" onClick={(e: React.MouseEvent<HTMLButtonElement>) => setType((e.target as HTMLButtonElement).value)}>User</button>
          <button className=' px-7 py-4 rounded-[25px] text-[#424242] shadow-whiteShadow active:shadow-hoverWhiteShadow' value="Driver" onClick={(e: React.MouseEvent<HTMLButtonElement>) => setType((e.target as HTMLButtonElement).value)} >Driver</button>
          </div> : <form onSubmit={handleSubmit}>
        <h2 className='text-2xl py-10'> Register </h2>
        <div className=''>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>First Name</h3>
            <input type="text" name='firstName' value={registrationData.firstName} onChange={handleInputChange} className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Middle Name <span className=' opacity-50'>(Optional)</span></h3>
            <input type="text" name='middleName' value={registrationData.middleName} onChange={handleInputChange}  className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Last Name</h3>
            <input type="text" name='lastName' value={registrationData.lastName} onChange={handleInputChange}  className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Email</h3>
            <input type="text" name='email' value={registrationData.email} onChange={handleInputChange}  className=' border p-3 w-full rounded-xl' />
            {emailErrorMessage? <h3 className=' text-red-500 text-sm'>*Please enter a valid Email</h3> :  null}
          </div>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Password</h3>
            <input type="password" name='passwordHash' value={registrationData.passwordHash} onChange={handleInputChange}  className=' border p-3 w-full rounded-xl' />
          </div> 
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Confirm password</h3>
            <input type="password" name='passwordHash' value={tempPass} onChange={(e)=>setTempPass(e.target.value)}   className=' border p-3 w-full rounded-xl' />
          {passErrorMessage ? <h3 className=' text-red-500 text-sm'>*Password did not match</h3> : null}
          </div>

          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Phone number</h3>
            <input type="text" name='phoneNumber' maxLength={11} value={registrationData.phoneNumber} onChange={handleInputChange}  className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='flex'>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Birth day</h3>
            <input type="date" name='birthDate' value={registrationData.birthDate} onChange={handleInputChange}  className=' border p-3 w-full rounded-xl' />
          </div>
          </div>
          <div className=''>
            <h2 className='text-xl my-[2rem]'>Address</h2>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Country</h3>
            <div>
            <Select
                  options={countries}
                  value={selectedCountry}
                  name='country'
                  onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                  className='rounded-xl'
                />
          </div>
          <div className='my-2'>
              <label htmlFor='postal-code' className='font-semibold block mb-2'>Postal Code</label>
              <div className='flex gap-2 items-center'>
                <input 
                  type="text" 
                  id='postalCodePart1'
                  name='postalCodePart1'
                  maxLength= {3}
                  value={registrationData.postalCodePart1} 
                  onChange={handleInputChange}
                  className='border p-3 w-[60px] rounded-xl'
                  />
                <span className=' '>-</span>
                <input 
                  type="text" 
                  id='postalCodePart2'
                  name='postalCodePart2'
                  maxLength={4}
                  value={registrationData.postalCodePart2} 
                  onChange={handleInputChange}
                  className='border p-3 w-[120px] rounded-xl'
                  />
              </div>
            </div>
          <div className='my-2'>
            <h3 className='mb-2  font-semibold'>City</h3>
            <input type="text" name='city' value={registrationData.city} onChange={handleInputChange}  className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='my-2'>
            <h3 className='mb-2  font-semibold'>Ward</h3>
            <input type="text" name='ward' value={registrationData.ward} onChange={handleInputChange}  className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='my-2'>
            <h3 className='mb-2  font-semibold'>Address</h3>
            <input type="text" name='address' value={registrationData.address} onChange={handleInputChange}  className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='my-2'>
            <h3 className='mb-2  font-semibold'>Apartment</h3>
            <input type="text" name='apartment' value={registrationData.apartment} onChange={handleInputChange}  className=' border p-3 w-full rounded-xl' />
          </div>
          </div>
          </div>
            {type === "Driver" ? <div className=''>
            <h2 className='text-xl my-[2rem]'>Driver Information</h2>
            <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Driver license number</h3>
            <input type="text" name='driverLicenseNumber' value={registrationData.driverLicenseNumber} onChange={handleInputChange}  className=' border p-3 w-full rounded-xl' />
            </div>
            <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Company <span className=' opacity-50'> (optional)</span></h3>
            <input type="text" name='company' value={registrationData.company} onChange={handleInputChange}  className=' border p-3 w-full rounded-xl' />
            </div>
            </div> : null}
            <div className='flex justify-center my-8 space-x-4'>
              <Link to="/homepage " className='flex items-center'> Back</Link>
              <button type='submit' className=' px-7 py-4 rounded-[25px] text-[#424242] shadow-whiteShadow active:shadow-hoverWhiteShadow'>Register</button>
            </div>
          </div>
        </form>}
      </div>
      </div>
    </>
  )
}


export default Register