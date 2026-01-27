/**
 * Fetch a list of users from an API and show the result to console.
 * @function fetchUsers
 * @typedef {Object} User
 * @property {number} id - The unique identifier for the user
 * @property {string} name - The name of the user
 * @property {string} username - The username of the user
 * @property {string} email - The email address of the user
 * @returns {Promise<Array<User>>} Array of user objects from the API
 */
async function fetchUsers() {
    try {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
}

/**
 * @param {Array<Object>} dataSource - Array of user objects
 * @param {string} userName - The name of the user to search
 * @returns {Array<Object>} Array of user objects that match the search name
 */

function filterUserByName(dataSource, userName) {
  return dataSource.filter((user) => 
    user.name.toLowerCase().includes(userName.toLowerCase())
  );
}

// module.exports = {fetchUsers, filterUserByName};
async function main() {
    const keyword = "Le"

    const data = await fetchUsers();
    const filtered = filterUserByName(data, keyword);
    console.log(filtered)
}

main()