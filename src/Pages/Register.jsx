import { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import regImg from '../assets/registerr.png';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { getAuth, updateProfile } from 'firebase/auth';

import app from '../Firebase/Firebase.config';
import toast from 'react-hot-toast';

const auth = getAuth(app);

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setPassword] = useState(false);
  const [registerError, setRegisterError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state ? location.state : '/';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    const { email, password } = data;
    if (password.length < 6) {
      setRegisterError('Password Should be minium 6 Charecter');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Minimun add one upper case');
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError('Minimun add one lower case');
      return;
    }
    setRegisterError('');

    createUser(email, password)
      .then(result => {
        updateProfile(auth.currentUser, {
          displayName: data.name,
          photoURL: data.photo,
        }).then(result => {
          toast('successfully register');
          navigate(from, { replace: true });
          // if (result.user) {
          // }
        });
      })
      .catch(error => {
        toast('Email and Pass Problem');
        console.log(data);
      });
    reset();
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-3 text-center">
              Register Now!
            </h1>
            <img className="h-[75vh]" src={regImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register('name', { required: true })}
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                {errors.name && <span>This field is required</span>}
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  {...register('photo', { required: true })}
                  name="photo"
                  type="text"
                  placeholder="url"
                  className="input input-bordered"
                  required
                />
                {errors.photo && <span>This field is required</span>}
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register('email', { required: true })}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  {...register('password', { required: true })}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  required
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 dark:text-gray-800"
                />
                <span
                  className="absolute top-3 right-2"
                  onClick={() => setPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              {registerError ? (
                <p className="text-md font-semibold text-red-600">
                  {registerError}
                </p>
              ) : (
                <p></p>
              )}
              <div className="form-control mt-4">
                <input
                  className="btn bg-[#00C2CB] text-white"
                  type="submit"
                  value="Register"
                ></input>
              </div>
            </form>

            <p className="text-xs text-center sm:px-6 dark:text-gray-600 py-3">
              Have an account?
              <Link
                to={'/login'}
                rel="noopener noreferrer"
                href="#"
                className="underline dark:text-gray-800 text-[#00C2CB] font-bold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
