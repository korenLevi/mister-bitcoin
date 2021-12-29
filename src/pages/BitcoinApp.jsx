import { Component } from 'react'
// import './assets/scss/global.scss';
// import { HomePage } from './homePage.jsx';
// import { Contacts } from './pages/Contacts';
// import { HashRouter as Router, Switch } from 'react-router-dom'
// import { Route } from 'react-router-dom';
// import { ContactDetails } from './pages/ContactDetails';
// import { AppHeader } from './cmps/AppHeader';
// import { ContactEdit } from './pages/ContactEdit';
// import { Statistic } from './pages/Statistic';
import { userService } from '../services/userService'
import { BitcoinService } from '../services/BitcoinService'
import { connect } from 'react-redux'
import { removeContact, setFilterBy, getContactById, loadContacts } from '../store/actions/contactActions';
import coinsImg from '../assets/imgs/coin.png'
class _BtcApp extends Component {

    //   componentDidMount(){
    //     this.props.loadContacts()
    //   }
    state = {
        user: null,
        BTC: null,
    }
    componentDidMount() {
        console.log(this.props);
        this.loadUser()
        // this.props.loadContacts()
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
    loadContacts = () => {
        this.props.loadContacts()
    }
    removeContact = (contactId) => {
        this.props.removeContact(contactId)
    }
    getContactById = (contactId) => {
        this.props.getContactById(contactId)
    }
    setFilterBy = (filterBy) => {
        this.props.setFilterBy(filterBy)
    }

    render() {
        const { user, BTC } = this.state;
        if (!user) return <div>Loading..</div>
        return (

            <div className="App">
                {/* <HomePage /> */}
                <div className="user-details">
                    <h1>Hello {user.name}</h1>
                    <h2>💰 Coins: {user.coins}</h2>
                    <h2>
                        <img src={coinsImg} alt="coinsImg" />
                        BTC: {BTC}
                    </h2>
                </div>
            </div>

        )

    }
}
const mapStateToProps = state => {
    return {
        contacts: state.contactModule.contacts,
    }
}

const mapDispatchToProps = {
    loadContacts,
    removeContact,
    setFilterBy,
    getContactById
}
export const BitcoinApp = connect(mapStateToProps, mapDispatchToProps)(_BtcApp)