import { Link } from "react-router-dom";

import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignIn = () => {
       const {register,handleSubmit,reset, formState: { errors },} = useForm()
       
       const{ createUser,updateUserProfile}= useContext(AuthContext);
       
       
       const onSubmit = (data) =>{
             console.log(data)

             createUser(data.email, data.password)
             .then(result=>{
                  const logUser= result.user;
                  console.log(logUser);
                  updateUserProfile(data.name , data.photo)
                  .then(()=>{
                        console.log('user info update')
                        reset()
                  })
                  .catch(error=>console.log(error))


             })
             .then(error=>{
                  console.log(error)
             })





      }



      
            
      

         

      
      return (

            <div>
                  <Helmet><title>Boos Restaurant| Sign-Up</title></Helmet>
            <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col md:flex-row">

            <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="md:text-5xl font-bold">Sign-Up now!</h1>
            <p className="py-6 text-base">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>

            
            <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">

            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">

            <div className="form-control">
            <label className="label">
            <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" {...register("name",{ required: true })} placeholder="Name" className="input input-bordered"  />
            {errors.name && <span className="text-red-600" >This field is required</span>}

            </div>

            <div className="form-control">
            <label className="label">
            <span className="label-text">Photo Url</span>
            </label>
            <input type="text" name="photo" {...register("photo",{ required: true })} placeholder="Photo Url" className="input input-bordered"  />
            {errors.photo && <span className="text-red-600" >This field is required</span>}

            </div>



            <div className="form-control">
            <label className="label">
            <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" {...register("email",{ required: true })} placeholder="email" className="input input-bordered"  />
            {errors.email && <span>This field is required</span>}
            </div>



            <div className="form-control">
            <label className="label">
            <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password",{ 
                   minLength:8,
                   pattern:/[0-9]/

                   })} placeholder="password" name="password" className="input input-bordered"  />
             {errors.password?.type==='minLength' && <p>password must be 8 cher</p>}
             {errors.password?.type==='pattern'&&<p>password must be at least one number </p>}
             





            <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>

            <div className="form-control mt-6">
            <button  className="btn btn-primary">Sign-Up</button>
            </div>
            <p>Already?<small className="font-bold"><Link to={'/Login'}>Have an Account</Link> </small></p>
            </form>
            </div>
            </div>
            </div>
            </div>
      );
};

export default SignIn;


