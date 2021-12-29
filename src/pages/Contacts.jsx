import React, { Component } from 'react'
import { contactService } from '../services/contactService.js'
import { ContactList } from '../cmps/ContactList'
// import { ContactsFilter } from './cmps/ContactsFilter';
import { ContactsFilter } from '../cmps/ContactsFilter.jsx'
import { connect } from 'react-redux'
import { removeContact, setFilterBy, getContactById, loadContacts } from '../store/actions/contactActions';
// import Input from '@mui/material/Input';
// or


class _Contacts extends Component {

    // state = {
    //     contacts: null,
    //     filterBy: null
    // }

    async componentDidMount() {
        await this.props.loadContacts()
    }


    // async loadContacts() {
    //     const { filterBy } = this.state
    //     const contacts = await contactService.getContacts(filterBy)
    //     // this.setState({ contacts })
    // }
    removeContact = async (contactId) => {
        this.props.removeContact(contactId)
    }

    onChangeFilter = (filterBy) => {
        console.log(filterBy)
        this.props.setFilterBy(filterBy)
        this.props.loadContacts()
        // this.setState({ filterBy }, this.loadContacts)
    }
    onAddContact = () => {
        // console.log('dd');
        this.props.history.push('/contact/edit')
    }
    render() {
        const { contacts } = this.props
        // console.log(contacts);
        if (!contacts) return <div>Loading...</div>
        // console.log('contacts', contacts);
        // if (!contacts) return
        return (
            <div >
                {/* <div className="btn-stick">
                    <a className="add-contact-btn">
                        <img src="https://talbenavi.github.io/appsus/assets/img/plus.png" alt="" />
                        </a>
                </div> */}
                <div className="contacts-page">
                    {/* <h1>contacts</h1> */}
                    <div className="actions-header">
                    <ContactsFilter history={this.props.history} onChangeFilter={this.onChangeFilter} />
                    <a className="add-contact-btn" onClick={this.onAddContact}>
                        <img src="https://talbenavi.github.io/appsus/assets/img/plus.png" alt="" />
                    </a>

                    </div>
                    <ContactList
                        history={this.props.history}
                        contacts={contacts} />
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        contacts: state.contactModule.contacts,
    }
}

const mapDispatchToProps = {
    loadContacts,
    removeContact,
    setFilterBy,
    getContactById
}
export const Contacts = connect(mapStateToProps, mapDispatchToProps)(_Contacts)