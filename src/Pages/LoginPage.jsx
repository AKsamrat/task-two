import { useContext, useEffect } from 'react';
import loginImg from '../assets/login_pro.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const { signIn, googleLogin, user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state ? location.state : '/';

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSocialLogin = socialProvider => {
    socialProvider().then(result => {
      if (result.user) {
        toast('Succesfully Login');
        navigate(from);
      }
      navigate(from, { replace: true });
    });
  };

  const onSubmit = data => {
    const { email, password } = data;
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        if (result.user) {
          toast('Succesfully Login');

          const loggedInUser = result.user;
          console.log(loggedInUser);
          const user = { email };
          // axios
          //   .post('http://localhost:7000/jwt', user, { withCredentials: true })
          //   .then(res => {
          //     console.log(res.data);
          //     if (res.data.success) {
          //       navigate(from);
          //     }
          //   });
          navigate(from, { replace: true });
        }
      })
      .catch(error => {
        toast('Dont Match email & pass');
      });
    reset();
  };
  if (user || loading) {
    return;
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-8 text-center">Login now!</h1>
            <img className="h-[75vh]" src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-14">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <button
                onClick={() => handleSocialLogin(googleLogin)}
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full  space-x-2 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 text-green-800"
              >
                <p className="flex justify-center items-center gap-3 p-4 text-xl font-bold">
                  {' '}
                  <span className="text-4xl">
                    <FcGoogle />
                  </span>
                  Login with Google
                </p>
              </button>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register('email', { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register('password', { required: true })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-4">
                <input
                  className="btn bg-[#00C2CB] text-white"
                  type="submit"
                  value="Login"
                ></input>
              </div>
            </form>

            <p className="text-xs text-center sm:px-6 dark:text-gray-600 py-3">
              Don't have an account?
              <Link
                to={'/register'}
                rel="noopener noreferrer"
                href="#"
                className="underline dark:text-gray-800 text-[#00C2CB] font-bold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
