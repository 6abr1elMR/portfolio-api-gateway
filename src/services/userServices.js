const axios = require('axios');

const getUsers = async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);
		return response.data;
	} catch (error) {
		console.error('Error fetching users:', error);
		return [];
	}
};

module.exports = { getUsers };
