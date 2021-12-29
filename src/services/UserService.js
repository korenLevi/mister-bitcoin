import {
    storageService
} from './storageService.js'
export const userService = {
    getUser,
    signup,
    getUserById,
    addMove,
    getLoggedinUser,
    logout,
}


const LOGGED_USER = 'loggedinUser'
const USERS = 'users'

const gDemoUsers =[ {
    _id: 'u101',
    name: "Koren Levi",
    coins: 100,
    moves: []
}]
const gUsers = _loadUsers()
// const s = JSON.parse(sessionStorage.getItem(USERS))
// console.log(s);
// sessionStorage.setItem(USERS,JSON.stringify(gDemoUsers))
function getUser() {
    return gDemoUsers[0]
}

function logout(){
    sessionStorage.removeItem(LOGGED_USER)
}


function signup(name) {
    const users = JSON.parse(sessionStorage.getItem(USERS))
    const loggedInUser = users?.find(user => user.name === name)
    if (loggedInUser) return login(loggedInUser)
    const newUser = _getEmptyUser(name)
    users.push(newUser)
    sessionStorage.setItem(USERS, JSON.stringify(users))
    console.log('newUser',newUser);
    sessionStorage.setItem(LOGGED_USER, JSON.stringify(newUser))
    return newUser;
}

function login(user) {
    sessionStorage.setItem(LOGGED_USER, JSON.stringify(user))
    return user
}

function addMove(contact, amount) {
    const move = _getMove()
    const currUser = getLoggedinUser()
    currUser.coint -=amount;
    currUser.moves.push(move);
    const idx = gUsers.indexOf(user => user._id === contact._id);
    gUsers.splice(idx,1,contact);
    sessionStorage.setItem(USERS,JSON.stringify(gUsers))

}

function getUserById(id) {
    const user = gUsers.find(user => user._id === id);
    // const users =  sessionStorage.getItem(USERS)
    // const user = users.filter(user => user._id === id)
    if(user) return user
}

function getLoggedinUser() {
    // console.log('gDemoUsers[0]',gDemoUsers[0]);
    // if(!gUsers) sessionStorage.setItem(USERS,JSON.stringify(gUsers))
    // sessionStorage.setItem(LOGGED_USER,JSON.stringify(gDemoUsers[0]))
    return JSON.parse(sessionStorage.getItem(LOGGED_USER))
}

function _getEmptyUser(name) {
    return {
        id: _makeId(),
        name,
        coins: 100,
        moves: []
    }
}

function _getMove(contact) {
    return {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount: contact.amount
    }
}

function _loadUsers2() {
    
    const users = JSON.parse(sessionStorage.getItem(USERS))
    console.log('users',users);
    console.log('gDemoUsers',gDemoUsers);
    if (!users || !users.length){
        sessionStorage.setItem(USERS,JSON.stringify(gDemoUsers[0]))
        return gDemoUsers[0]
        
    } 
}
function _loadUsers(){
    
    // var users = storageService.load(USERS)
    var users = JSON.parse(sessionStorage.getItem(USERS))
    if (!users || !users.length) users = gDemoUsers
    // storageService.save(USERS, users)
    sessionStorage.setItem(USERS,JSON.stringify(users))
    login(users[0]);
    return users
}

function _makeId(length = 5) {
	var text = ''
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return text
}