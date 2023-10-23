import React from "react";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white shadow-md p-6 rounded-lg">
      <div className="flex justify-center">
        <img
          src={
            user
              ? user?.photoURL
              : "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
          }
          className="w-24 h-24 lg:w-40 lg:h-40  rounded-full"
        />
      </div>
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold">
          {user ? user?.displayName : "No user found"}
        </h2>
        <p className="text-gray-500 dark:text-gray-300 text-base">
          {user ? user?.email : "No email found"}
        </p>
      </div>
      <div className="mt-6">
        <p className="text-gray-600 dark:text-white">Last Sign-In:</p>
        <p className="text-gray-800 dark:text-gray-300">
          {new Date(
            user ? user?.metadata?.lastSignInTime : "No time found"
          ).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
