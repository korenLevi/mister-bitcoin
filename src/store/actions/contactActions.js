import { contactService } from "../../services/contactService"

export function loadContacts() {
    return async (dispatch,getState) => {
        const { filterBy } = getState().contactModule
        try {
            console.log('filterBy',filterBy);
           const contacts = await contactService.getContacts(filterBy);
           dispatch({type: 'SET_CONTACTS',contacts})
        }catch(err){
            console.log(err);
        }
    }
    
}

export function removeContact(contactId){
    return async (dispatch) => {
        try{
            await contactService.deleteContact(contactId)
            dispatch({ type: 'REMOVE_CONTACT', contactId})
        }catch(err){
            console.log(err);
        }
    } 
}
export function getContactById(contactId) {
    return async () => {
        return await contactService.getContactById(contactId)
    }
}

export function setFilterBy(filterBy){
    console.log('filterBy',filterBy);
    return async (dispatch) => {
        dispatch({type: 'SET_FILTER_BY',filterBy})
    }
}

export function addContact(contact){
    return async (dispatch) => {
        try {
            contactService.saveContact(contact)
            dispatch({type: 'ADD_CONTACT'})
        } catch(err){
         console.log(err);   
        }
    }
}
