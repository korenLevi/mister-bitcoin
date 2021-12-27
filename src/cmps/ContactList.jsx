// import React, { Component } from 'react'
import { ContactPreview } from './ContactPreview';

// }
import React from 'react'

export function ContactList({contacts}) {
    // const {contacts} = this.props
    if(!contacts) return <div>Loading...</div>
    return (
       
            <section className="contact-list">
                {/* <h1>fff</h1> */}
                {contacts.map(contact =>    
                  <ContactPreview contact={contact} key={contact._id}/>
                   )
               }
               
           </section>
        
    )
}

