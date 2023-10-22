import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {
    const {user}=useAuth();
    return (
        <div>
            user
        </div>
    );
};

export default UserProfile;