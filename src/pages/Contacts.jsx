import React, { Component } from 'react'
import { contactService } from '../services/contactService.js'
import { ContactList } from '../cmps/ContactList'
// import { ContactsFilter } from './cmps/ContactsFilter';
import { ContactsFilter } from '../cmps/ContactsFilter.jsx'
export class Contacts extends Component {

    state = {
        contacts: null,
        filterBy: null
    }

    async componentDidMount() {
        this.loadContacts()
    }

    
    async loadContacts() {
        const { filterBy } = this.state
        const contacts = await contactService.getContacts(filterBy)
        this.setState({ contacts })
    }
    
    onChangeFilter = (filterBy) => {
        
        this.setState({ filterBy }, this.loadContacts)
    }
    render() {
        const { contacts } = this.state
        if (!contacts) return <div>Loading...</div>
        // console.log('contacts', contacts);
        // if (!contacts) return
        return (
            <div className="contacts-page">
                <h1>contacts</h1>
                <ContactsFilter onChangeFilter={this.onChangeFilter} />
                <ContactList contacts={contacts} />

            </div>
        )
    }
}
