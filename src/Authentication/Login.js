import React from 'react';
import auth from '../firbase.init';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading';


const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);



  const onSubmit = (data) => {
    console.log(data)
    signInWithEmailAndPassword(data.email, data.password)

  };

  if (gUser || user){
    console.log(gUser, user)
  }
  let errorMassage;
  if(gError || error){
    errorMassage = <small className='text-red-500'>{error?.message}</small>
  }

  if(gLoading || loading){
    return <Loading></Loading>
  }


  return (
    <div className='flex justify-center align-center items-center h-screen'>
      <div className="card w-96 flex bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-accent text-xl">LOG IN</h2>


          <form onSubmit={handleSubmit(onSubmit)}>


            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: 'Email is Required'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email'
                  }
                })}
              />
                <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            </label>
            </div>

          

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: 'password is Required'
                  },
                  minLength: {
                    value: 6,
                    message: 'must be 6 character or longer'
                  }
                })}
              />
                <label className="label">
              {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
            </label>
            </div>

          
             {errorMassage}
            <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
          </form>



          <div className="divider">OR</div>

          <div className=" justify-center">

            <button
              onClick={() => signInWithGoogle()}
              class="btn btn-outline w-full">Google</button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;