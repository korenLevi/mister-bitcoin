import React from 'react'
import { Link } from "react-router-dom";
import contactIcon from '../assets/imgs/person-icon.svg'
export function ContactPreview({contact}) {
    // function contactDetils(ev) {
    //     ev.stopPropagation()
    //     console.log('contact',contact);
    //     <Link to = '/contactDeatils/' ></Link>

    // }

    if(!contact) return <div>Loading...</div>
    return (
        <Link to = {'/contact/' + contact._id}  >
        <div className="contact-preview" >
            <img src={contactIcon} alt="img"/>
            <h1>{contact.name}</h1>
        </div>
        </Link>
    )
}
