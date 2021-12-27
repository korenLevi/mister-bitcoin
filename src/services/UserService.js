
export const userService = {
    getUser,
}

const user = {
    name: "Koren Levi",
    coins: 100,
    moves: []
   }

function getUser() {
    return user
}