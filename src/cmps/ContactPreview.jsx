// import React from 'react'
import { Link } from "react-router-dom";
import contactIcon from '../assets/imgs/person-icon.svg'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
export function ContactPreview({ contact , history}) {
    // function contactDetils(ev) {
    //     ev.stopPropagation()
    //     console.log('contact',contact);
    //     <Link to = '/contactDeatils/' ></Link>

    // }
    // onClick={onRemoveContact}
    function onEditContact(ev){
        ev.preventDefault()
        ev.stopPropagation()
        history.push(`/contact/edit/${contact._id}`)
    }
    // onClick={onEditContact}
    // if (!contact) return <div>Loading...</div>
    return (
        <List>
            <Link to={'/contact/' + contact._id}  >
                <ListItem
                    className='list-item'
                    secondaryAction={
                        <IconButton
                            edge='end'
                            aria-label='delete'
                        >
                            <DeleteIcon />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar>{contact.name.charAt(0)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={contact.name} />
                    <IconButton onClick={onEditContact} edge='end' aria-label='delete' >
                            <EditIcon />
                        {/* <Link to={`/contact/edit/${contact._id}`}>

                        </Link> */}
                    </IconButton>
                    {/* <div className="contact-preview" >
                        <img src={contactIcon} alt="img" />
                        <h1>{contact.name}</h1>
                    </div> */}
                </ListItem>
            <Divider></Divider>
            </Link>
        </List>
    )
}
