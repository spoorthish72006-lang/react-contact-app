//import react from "react"

import user from "../images/user.jpg";

const ContactCard = (props) => {
    const{id,name,email}=props.contact;
   
    return(
       <div className="item" key={id}> 
                <img className="ui avatar image" src={user} alt="user" height="100px" width="100px"/>

                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i
                 className="trash alternate outline icon"
                 style={{color:"red",marginTop:"7px"}}
            ></i>
        </div>
    
    );
}

    export default ContactCard;
