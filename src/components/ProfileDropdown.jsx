import React, { useRef, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProfileDropdown = () => {
  const { user, logOut } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const openDropdown = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  //  logout Handler
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/")
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="relative inline-block z-10">
      <div
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
        className="flex items-center py-0 px-2 rounded-2xl gap-1 cursor-pointer hover:border-primary transition duration-100"
      >
        <div
          title={user.displayName}
          className="h-7 w-7 lg:w-10 lg:h-10 rounded-full overflow-hidden"
        >
          <img
            referrerPolicy="no-referrer"
            src={
              user.photoURL ||
              "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
            }
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className="absolute top-full right-0 mt-2 dark:bg-gray-800 dark:text-gray-50 bg-white border border-gray-300 shadow-md rounded-md"
        >
          <ul className="flex flex-col">
            <Link to="/userProfile" className="px-10 py-2 w-full hover:bg-green-600 hover:text-white hover:duration-500 cursor-pointer flex items-center gap-2">
              <FaRegUserCircle className="text-xl" />
              Profile
            </Link>
            <li
              onClick={handleLogOut}
              className="px-10 py-2 w-full mt-auto  hover:bg-red-500 hover:text-white hover:duration-500 cursor-pointer flex items-center gap-2"
            >
              <AiOutlineLogout className="text-xl" />
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
