import React, { Component } from 'react'
import { contactService } from '../services/contactService'
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { connect } from 'react-redux'
import { addContact } from '../store/actions/contactActions'
class _ContactEdit extends Component {

    state = {
        contact:null,
    }

    // inputRef = createRef()

    async componentDidMount(){
        const contactId = this.props.match.params.id
        console.log('contactId',contactId);
        const contact = (contactId) 
         ? await contactService.getContactById(contactId)
        : contactService.getEmptyContact()
        this.setState({ contact })
        // console.log(this.props);
        // , () => this.inputRef.current.focus()
    }
    handleChange = ({ target }) => {
        console.log('this.state.contact',this.state.contact);
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    
    onSaveContact = async (ev) => {
        ev.preventDefault()
        await contactService.saveContact({...this.state.contact})
        this.props.history.goBack()
        // this.props.history.push(`/contacts`)
    }
    render() {
        const {contact} = this.state
        if(!contact) return <div>Loading...</div>

        return (
            <div className="contact-edit">
                <form className="contact-container" onSubmit={this.onSaveContact}>
                    <label htmlFor="name">Name</label>
                    <input onChange={this.handleChange} type="text" name="name" value={contact.name} />
                    <label htmlFor="phone">Phone</label>
                    <input onChange={this.handleChange} type="text" name="phone" value={contact.phone} />
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} type="text" name="email" value={contact.email} />

                    <button>Save</button>
                </form>
                
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      contact: state.contactModule.contact,
    }
  }
  
  const mapDispatchToProps = {
    addContact,
  }
  
  export const ContactEdit = connect(
    mapStateToProps,
    mapDispatchToProps
  )(_ContactEdit)
  
