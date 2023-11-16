import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const LogIn = () => {

      const {singIn}= useContext(AuthContext);

      const captchaRef= useRef(null);
      const[disable, setDisable]= useState(true)

      useEffect(()=>{

            loadCaptchaEnginge(6)
      },[])

      const handleLogIn =(e)=>{
            e.preventDefault();
            const from = e.target;
            const email = from.email.value;
            const password= from.password.value;
            const logInfo = {email, password}
            console.log(logInfo)

            singIn(email,password)
            .then(result=>{
                  const user= result.user
                  console.log(user)
            })
            .then(error=>{
                  console.log(error)
            })



      }

      const handleCaptcha=(e)=>{
            e.preventDefault()
            const value= captchaRef.current.value;
            //console.log(value)
            if (validateCaptcha(value)==true) {
                  //alert('Captcha Matched');
                  setDisable(false)
              }
              else {
                  alert('Captcha Does Not Match');
              }

      }

     
      return (
            <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col md:flex-row">

            <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="md:text-5xl font-bold">Login now!</h1>
            <p className="py-6 text-base">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>

            
            <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn}  className="card-body">
            <div className="form-control">
            <label className="label">
            <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
            <label className="label">
            <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
            <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>

            <div className="form-control">
            <label className="label">
              <LoadCanvasTemplate />
            </label>

            <input type="text" ref={captchaRef} placeholder="Type-here" name="captcha" className="input input-bordered" required />
            <button onClick={handleCaptcha} className="btn btn-sm my-5 ">Match Captcha</button>
      
            </div>


            <div className="form-control mt-6">
            <button disabled={disable} className="btn btn-primary">Login</button>
            </div>
            <p>New Here?<small className='font-bold'><Link to={'/SignIn'}>Create an Account</Link> </small></p>
            </form>
            </div>
            </div>
            </div>
      );
};

export default LogIn;



