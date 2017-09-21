// [{
//     id: '123123131',
//     name: 'Andrew',
//     room: 'office fans'
// }]


// add user (id, name, room)
// remove user(id)
// getUser(id)
// getUserList(room)

class Users {
    constructor() {
        this.users = [];
    }
    addUser(id, name, room) {
        var user = { id, name, room };
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        // return user that was removed
        var user = this.getUser(id);
        if (user) {
            this.users = this.users.filter((user) => user.id !== id)
        }
        return user;
    }
    getUser(id) {
        // return the user
        return this.users.filter((user) => user.id === id)[0]
    }
    getUserList(room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }
}


module.exports = { Users };