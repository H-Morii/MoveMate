import React, {useState, useEffect} from 'react'
import Select from "react-select";
import Radiogroup from 'react-radio-buttons'
import RadioButton from 'react-radio-buttons'
import { Link } from 'react-router-dom';  

const Register = () => {
  //User or Driver register
  const [type, setType] = useState('')

  // Country dropdown
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  //Radio for normal user and driver.
  const [selectedOption, setSelectedOption] = useState('option1');

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }


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
          <div className='flex justify-around mt-6'>
          <button className=' px-7 py-4 rounded-[25px] text-[#424242] shadow-whiteShadow active:shadow-hoverWhiteShadow' value={"User"} onClick={(e) => setType(e.target.value)}>User</button>
          <button className=' px-7 py-4 rounded-[25px] text-[#424242] shadow-whiteShadow active:shadow-hoverWhiteShadow' value={"Driver"} onClick={(e) => setType(e.target.value)} >Driver</button>
          </div>
        </header>
        {!type ? null : <form action="">
        <h2 className='text-2xl py-10'> Register </h2>
        <div className=''>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>First Name</h3>
            <input type="text" className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Middle Name <span className=' opacity-50'>(Optional)</span></h3>
            <input type="text" className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Last Name</h3>
            <input type="text" className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Email</h3>
            <input type="text" className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Phone number</h3>
            <input type="text" className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='flex'>
          <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Birth day</h3>
            <input type="date" className=' border p-3 w-full rounded-xl' />
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
                  onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                  className='rounded-xl'
                />
          </div>
          <div className='my-2'>
              <label htmlFor='postal-code' className='font-semibold block mb-2'>Postal Code</label>
              <div className='flex gap-2 items-center'>
                <input 
                  type="text" 
                  id='postal-code-part1'
                  name='postal-code-part1'
                  maxLength='3' 
                  className='border p-3 w-[60px] rounded-xl'
                  />
                <span className=' '>-</span>
                <input 
                  type="text" 
                  id='postal-code-part2'
                  name='postal-code-part2'
                  maxLength='4' 
                  className='border p-3 w-[120px] rounded-xl'
                  />
              </div>
            </div>
          <div className='my-2'>
            <h3 className='mb-2  font-semibold'>City</h3>
            <input type="text" className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='my-2'>
            <h3 className='mb-2  font-semibold'>Ward</h3>
            <input type="text" className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='my-2'>
            <h3 className='mb-2  font-semibold'>Address</h3>
            <input type="text" className=' border p-3 w-full rounded-xl' />
          </div>
          <div className='my-2'>
            <h3 className='mb-2  font-semibold'>Appartment</h3>
            <input type="text" className=' border p-3 w-full rounded-xl' />
          </div>
          </div>
          </div>
            {type === "Driver" ? <div className=''>
            <h2 className='text-xl my-[2rem]'>Driver Information</h2>
            <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Driver license number</h3>
            <input type="text" className=' border p-3 w-full rounded-xl' />
            </div>
            <div className='mb-2'>
            <h3 className='mb-2 font-semibold'>Company <span className=' opacity-50'> (optional)</span></h3>
            <input type="text" className=' border p-3 w-full rounded-xl' />
            </div>
            </div> : null}
            <div className='flex justify-center my-8 space-x-4'>
              <Link to="/homepage" className='flex items-center'> Back</Link>
              <button className=' px-7 py-4 rounded-[25px] text-[#424242] shadow-whiteShadow active:shadow-hoverWhiteShadow'>Register</button>
            </div>
          </div>
        </form>}
      </div>
      </div>
    </>
  )
}


export default Register