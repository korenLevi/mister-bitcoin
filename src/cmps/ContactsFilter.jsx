import React, { Component } from 'react'

export class ContactsFilter extends Component {

    state = {
        name: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter(this.state)
        })

    }


    render() {
        const { name } = this.state;
        return (
           
                <form className="contacts-filter">    
                    <section className="input-container">
                        <label htmlFor="name">Search</label>
                        <input onChange={this.handleChange} value={name} type="text" name="name" id="name" />
                    </section>
                </form>
            
        )
    }
}
