import { NavLink, withRouter } from "react-router-dom";
import {userService} from '../services/userService'
// import { connect } from "react-redux";
import React from 'react'

// export default function AppHeader() {
//     return (
//         <div>
            
//         </div>
//     )
// }

function _AppHeader(props) {

    function logout(){
        userService.logout()
        props.history.push(`/`)
    }
    // function isLoggedIn(){
    //     const user = userService.getLoggedinUser()
    //     console.log('user',user);
    //     if (user){
    //         this.props.history.push('/home')
    //         alert('log out first')
    //     } 
    // }
    
    return (
        <header className='app-header'>
            <section className='container'>
                {/* <section className="back-container">
                    <button onClick={props.history.goBack}>Back</button>
                    <button onClick={logout}>Log out</button>
                </section> */}
                <div className="header-title">Mister Bitcoin</div>
                <nav>
                    <NavLink activeClassName="my-active" exact to='/home'>Home</NavLink>
                    <NavLink activeClassName="my-active" to='/contacts'>Contacts</NavLink>
                    <NavLink activeClassName="my-active" exact to='/statistic'>Statistic</NavLink>
                    <NavLink activeClassName="my-active" exact to='/'>Sign up</NavLink>
                    <a className="logout-btn" onClick={logout}>Log out</a>
                </nav>
            </section>
            {/* <hr /> */}
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)