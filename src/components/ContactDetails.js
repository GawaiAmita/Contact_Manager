import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg"

const ContactDetails = (props) => {
     const {name, number, email} = props.location.state.contact;
     return (
          <div className="main-contact-details"> 
               <div className="card-contact-details">
                    <div className="user-img">
                         <img src = {user} alt="User" />
                    </div>
                    <div className="contents-d">
                         <div className="header-d">{name}</div>
                         <div className="description-d">{number}</div>
                         <div className="description-d">{email}</div>
                    </div>
               </div>
               <div className="back-btn-d">
                    <Link to = "/"> 
                         <button>Back</button>
                    </Link> 
               </div>
          </div>
     );
};

export default ContactDetails;


