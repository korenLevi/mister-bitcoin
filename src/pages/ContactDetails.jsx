
import React, { Component } from 'react'
import { contactService } from '../services/contactService'
import contactIcon from '../assets/imgs/person-icon.svg'
import { Link } from 'react-router-dom'
export class ContactDetails extends Component {

    state = {
        contact: null,
    }

    componentDidMount() {
        this.loadRobot()
    }

    async loadRobot() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        console.log('contact:', contact);
        this.setState({ contact })
    }
    onGoBack = () => {
        this.props.history.push('/contacts')
    }
    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading..</div>
        return (
            <div>
                <header className="contact-details-header">
                    <a onClick={this.onGoBack} className="back-icon">⬅</a>
                    <Link to={`/contact/edit/${contact._id}`}>✏️</Link>
                    {/* <a href="" className="edit-icon">✏️</a> */}
                </header>
                <div className="contact-details">
                    <img src={contactIcon} alt="img" />
                    <h1>Name: {contact.name}</h1>
                    <h1>Phone: {contact.phone}</h1>
                    <h1>Email: {contact.email}</h1>
                </div>
            </div>
        )
    }
}

