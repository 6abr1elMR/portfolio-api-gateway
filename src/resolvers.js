const usersService = require('./services/userServices');

const resolvers = {
	Query: {
		users: () => usersService.getUsers(),
	},
};

module.exports = resolvers;
