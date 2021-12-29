
import React, { Component } from 'react'
import { contactService } from '../services/contactService'
import contactIcon from '../assets/imgs/person-icon.svg'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
export class ContactDetails extends Component {

    state = {
        contact: null,
    }

    componentDidMount() {
        this.loadContacts()
    }

    async loadContacts() {
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
            <div className="contact-details-container">
                <header className="contact-details-header">

                    {/* <a onClick={this.onGoBack} className="back-icon">⬅</a> */}
                    {/* <IconButton
                        edge='end'
                        aria-label='back'
                        onClick={this.onGoBack}
                    >
                        <ArrowBackIcon
                        />
                    </IconButton> */}
                    {/* <Link to={`/contact/edit/${contact._id}`}>✏️</Link> */}
                    {/* <a href="" className="edit-icon">✏️</a> */}
                </header>
                {/* <div className="contact-details">
                    <div className="contactIcon">
                    <img src={contactIcon} alt="img" />
                    </div>
                    <h1>Name: {contact.name}</h1>
                    <h1>Phone: {contact.phone}</h1>
                    <h1>Email: {contact.email}</h1>
                </div> */}
                <Card sx={{ minWidth: 275 }}>
                    <CardActions>
                        <IconButton
                            edge='end'
                            aria-label='back'
                            onClick={this.onGoBack}
                        >
                            <ArrowBackIcon
                            />
                        </IconButton>
                    </CardActions>

                    <CardContent>
                        <img src={contactIcon} className="user-avatar" alt="img" />
                        {/* <Avatar
                            alt="Remy Sharp"
                            src={contactIcon}
                            sx={{ width: 76, height: 76 }}
                        /> */}
                        <h1>Name: {contact.name}</h1>
                        <h1>Phone: {contact.phone}</h1>
                        <h1>Email: {contact.email}</h1>
                    </CardContent>

                </Card>
            </div>
        )
    }
}

