const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 1,
            name: 'Arun',
            room: 'NodeJS'
        }, {
            id: 2,
            name: 'Harika',
            room: 'NodeJS'
        }, {
            id: 3,
            name: 'Master',
            room: 'ReactJS'
        }];
    });
    it('should add a new users', () => {
        var users = new Users();

        var user = {
            id: 123,
            name: 'Arun',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });
    it('should remove a user', () => {

    });

    it('should return a user', () => {

    });

    it('should return names for NodeJS', () => {
        var userList = users.getUserList('NodeJS');

        expect(userList).toEqual(['Arun', 'Harika']);
    });
    it('should return names for ReactJS', () => {
        var userList = users.getUserList('ReactJS');

        expect(userList).toEqual(['Master']);
    });
});