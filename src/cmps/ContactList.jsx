// import React, { Component } from 'react'
import { ContactPreview } from './ContactPreview';

// }
import React from 'react'

export function ContactList({contacts,history}) {
    // const {contacts} = this.props
    if(!contacts) return <div>Loading...</div>
    return (
       
            <section className="contact-list">
                <h1>Contacts List</h1>
                {contacts.map(contact =>    
                  <ContactPreview contact={contact} history={history} key={contact._id}/>
                   )
               }
               
           </section>
        
    )
}

