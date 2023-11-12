import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
  };

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center lg:w-1/2 lg:text-left">
        <h1 className="text-5xl font-bold">Sign up now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card  lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="name"  {...register("nameRequired",{ required: true })} placeholder="email" className="input input-bordered" required />
            {errors.nameRequired && <span className="text-red-700">Name is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"  {...register("email")} placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password"  {...register("password")} placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
           
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          </div>
        </form>
        <p className="text-center pb-10">Already have an account.Please <Link to={'/login'}>Login</Link></p>
      </div>
    </div>
  </div>
  );
};

export default SignUp;