const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Arun',
            room: 'NodeJS'
        }, {
            id: '2',
            name: 'Harika',
            room: 'NodeJS'
        }, {
            id: '3',
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
        var userId = '3';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });
    it('should not remove a user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist();
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