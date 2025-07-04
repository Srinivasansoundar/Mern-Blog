import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Button, Label,TextInput,Alert, Spinner} from 'flowbite-react'
import { useState } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import OAuth from './OAuth';
export default function SignIn() {
  const [formData,setFormData]=useState({});
  const {loading,error:errorMessage}=useSelector((state) => state.user)  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
    //console.log(formData)
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if( !formData.email || !formData.password){
      return dispatch(signInFailure("Please fill out all fields"))
    }
    try{
       dispatch(signInStart())
       const res=await fetch('/api/auth/sign-in',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      });
      const data=await res.json();
      // console.log(data)
      if(data.success==false){
        // setLoading(false)
        console.log("hello")
        dispatch(signInFailure(data.message))
      }
      
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/')
      }
    }
    catch(err){
        dispatch(signInFailure(err.message))
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      {/* min-h-screen =min-height:100vh */}
      <div className="flex p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* left */}
        <div className="flex-1">
        <Link to='/'
                className='font-bold dark:text-white text-4xl'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white' >Srini's</span>
                Blog
            </Link>
            <p className=" text-sm mt-5">
              This is a demo project.You can sign in with your email and password or with Google
            </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className="">
              <Label value="Your email"/>
              <TextInput
              type='text'
              placeholder='name@company.com'
              id='email'
              onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Your password"/>
              <TextInput
              type='password'
              placeholder='Password'
              id='password'
              onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading?(
                  <>
                  <Spinner size='sm'/>
                  <span className=''>Loading...</span>
                  </>
                )
                :"Sign in"
              }
            </Button>
            <OAuth/>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't Have an account</span>
            <Link to='/sign-up' className='text-blue-500'>
            Sign Up
            </Link>
          </div>
          {
            errorMessage  && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
