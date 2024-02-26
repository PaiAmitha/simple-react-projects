import React from 'react'
import user from '../Images/user.png';

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
  return (
      <div className="item">
        <img className='ui avatar image' src={user} alt="user"/>
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <span style={{marginLeft:"280px"}}>
                <i className='trash alternate outline icon' style={{color: "red", position: "relative"}}></i>
                </span>
            </div>
  )
}

export default ContactCard
