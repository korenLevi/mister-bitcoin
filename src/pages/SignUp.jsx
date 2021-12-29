import React, { Component } from 'react'
import coinsImg from '../assets/imgs/coin.png'
import { userService } from '../services/userService'
export class SignUp extends Component {
    state = {
        name: ''
    }
    componentDidMount() {
        this.isLoggedIn()
    }
    isLoggedIn() {
        const user = userService.getLoggedinUser()
        if (user){
            this.props.history.push('/home')
            alert('log out first')
        } 
    }
    handleChange = ({ target }) => {
        console.log('value', target.value);
        this.setState({ name: target.value })
    }

    signUp = async (ev) => {
        ev.preventDefault()
        console.log(this.state.name);
        await userService.signup(this.state.name)
        this.props.history.push('/home')
        console.log('this.props.', this.props);
    }
    render() {
        const { name } = this.state
        return (
            <div className="signup-page">
                <div>
                    <img src={coinsImg} />
                    <form onSubmit={this.signUp}>
                        <label htmlFor="name">Please enter toyr name:</label>
                        <input onChange={this.handleChange} name="name" type="text" value={name} />
                        <button>Sign Up</button>
                        {/* <input type="submit" value="Sign up" /> */}
                    </form>
                </div>
            </div>
        )
    }
}
