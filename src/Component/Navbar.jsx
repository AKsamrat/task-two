import React, { useState } from 'react';
import avatarImg from '../assets/placeholder.jpg';
import { GoArrowUpRight } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logOut();
    navigate('/login');
  };

  return (
    <div className="">
      <div className=" mx-auto bg-gradient-to-r from-[#e5f6ffbe] from-30% via-[#02004307] via-40%  to-[#e5f6ffbe] rounded-t-2xl px-2 ">
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

            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Become A Host btn */}
                <div className="hidden md:block">{/* )} */}</div>

                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    {/* Avatar */}
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt="profile"
                      height="30"
                      width="30"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    {user ? (
                      <>
                        <p className="pl-4">{user?.displayName}</p>
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
        </header>
      </div>
    </div>
  );
};

export default Navbar;
