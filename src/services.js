import axios from 'axios';

export const login = async (user) => {
  try {
    const response = await axios.post('http://localhost:3001/login', {
      user: user
    });

    console.log("login response "+ response.data);
    return response.data; 
  } catch (error) {
    console.error('Error posting message:', error);
    throw error; 
  }
};

export const addUseProfile = async (profile) => {
  try {
    const response = await axios.post('http://localhost:3001/profile', {
      profile: profile,
    });
    console.log(response.data);
    return response.data; 
  } catch (error) {
    console.error('Error posting message:', error);
    throw error; 
  }
};

export const fetchUserProfile = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3001/profile/${userId}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error; // Throw error to be caught by caller
  }
};

export const fetchALlUserProfiles = async (usrId) => {
  try {
    const response = await axios.get(`http://localhost:3001/profile/all`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error; // Throw error to be caught by caller
  }
};

