import React from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const params = useParams();
    const userId = params.userID;
  return (
    <div>
      Details about user {userId}
    </div>
  )
}

export default UserDetails
