import axios from 'axios';

const BASE_URL = process.env.REACT_APP_GITHUB_API_URL;
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};

export default fetchUserData;
