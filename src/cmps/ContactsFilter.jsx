import React, { Component } from 'react'
import Input from '@mui/material/Input';
export class ContactsFilter extends Component {

    state = {
        name: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        console.log('field',field);
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
                    <label htmlFor="name"></label>
                    <Input onChange={this.handleChange} placeholder="Contact name" value={name} type="text" name="name" id="name" />
                    {/* <input onChange={this.handleChange} value={
                            name} type="text" name="name" id="name" /> */}
                </section>
                {/* <a className="add-contact-btn" onClick={this}>
                    <img src="https://talbenavi.github.io/appsus/assets/img/plus.png" alt="" />
                </a> */}
            </form>

        )
    }
}
