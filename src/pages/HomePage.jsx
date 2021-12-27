import { Component } from 'react'
import { userService } from '../services/UserService'
import { BitcoinService } from '../services/BitcoinService'
import {Contact} from './Contacts'
// import { HashRouter,Route, Switch, NavLink} from 'react-router-dom'
import { Link , NavLink} from 'react-router-dom'
import coinsImg from '../assets/imgs/coin.png'
export class HomePage extends Component {

    state = {
        user: null,
        BTC: null,
    }
    componentDidMount() {
        this.loadUser()
    }

    async loadUser() {
        const user = await userService.getUser()
        console.log('user', user);
        this.setState({ user });
        BitcoinService.getRate(this.state.user.coins)
            .then(BTC => {
                this.setState({ BTC })
            })
    }

    render() {
        const { user, BTC } = this.state;
        if (!user) return <div>Loading..</div>
        return (
            <div>
                <header>
                   <Link to="/contact" >Contacts</Link>
                   {/* <NavLink to="/contacts" exact>Contacts</NavLink>    */}
                </header>
                <div className="user-details">
                    <h1>Hello {user.name}</h1>

                    <h2>💰 Coins: {user.coins}</h2>

                    <h2>
                        <img src={coinsImg} alt="coinsImg" />
                        BTC: {BTC}</h2>
                </div>

            </div>
        )
    }
}
{/* <img src={coinsImg} alt={coinsImg} />  */ }