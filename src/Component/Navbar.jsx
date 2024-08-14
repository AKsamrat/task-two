import React, { useState } from 'react';

import { GoArrowUpRight } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    console.log('logout');
    navigate('/login');
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#e5f6ffbe] from-30% via-[#02004307] via-40%  to-[#e5f6ffbe] rounded-t-2xl px-2 ">
        <header className="p-2 dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex justify-between items-center  mx-auto">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center "
            >
              {/* <p className="text-3xl font-bold">
                S-<span className="text-blue-600">Kash</span>
              </p> */}
              <img className="w-28 h-14" src="sk_logo.png" alt="" />
            </a>

            <div>
              <div className="items-center flex-shrink-0 hidden lg:flex">
                {user ? (
                  <Link
                    onClick={handleLogout}
                    className="self-center  py-2 border-slate-500  flex justify-center items-center gap-1 border-2 rounded-xl px-3 "
                  >
                    LogOut <GoArrowUpRight />
                  </Link>
                ) : (
                  <Link
                    to={'/login'}
                    className="self-center  py-2 border-blue-400  flex justify-center items-center gap-1 border-2 rounded-xl px-3 "
                  >
                    LogIn <GoArrowUpRight />
                  </Link>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 dark:text-gray-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                      {/* {role === 'User' && <UserMenue></UserMenue>}
                    {role === 'Agent' && <AgentMenue />}
                    {role === 'Admin' && <AdminMenue />} */}

                      {user ? (
                        <>
                          <div
                            onClick={handleLogout}
                            className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                          >
                            Logout
                          </div>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                          >
                            Login
                          </Link>
                          <Link
                            to="/signup"
                            className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                          >
                            Sign Up
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
