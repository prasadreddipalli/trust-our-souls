import axios from 'axios';
import AWS from 'aws-sdk';

export const login = async (user) => {
  try {
    const response = await axios.post('http://3.209.107.110:3001/login', {
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
    const response = await axios.post('http://3.209.107.110:3001/profile', {
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
    const response = await axios.get(`http://3.209.107.110:3001/profile/${userId}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error; // Throw error to be caught by caller
  }
};

export const fetchALlUserProfiles = async (usrId) => {
  try {
    const response = await axios.get(`http://3.209.107.110:3001/profile/all`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error; // Throw error to be caught by caller
  }
};

export const fetchProfiles = async (values) => {
  try {
    const response = await axios.post(`http://3.209.107.110:3001/profile/search`, {
      search: values,
    });

    return response.data; 
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error; // Throw error to be caught by caller
  }
};



export const uploadToS3 = (fileName,selectedFile) => {
   // e.preventDefault();
    AWS.config.update({
        accessKeyId: 'AKIAXYKJTG2EZOYAWPUP',
        secretAccessKey: '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'
    });

    const s3 = new AWS.S3();
    const params = {
        Bucket: 'trust-our-souls',
        Key: fileName,
        Body: selectedFile,
        ACL: 'public-read' 
    };

    // Upload the file to S3
    s3.upload(params, (err, data) => {
        if (err) {
            console.error('Error uploading file:', err);
        } else {
            console.log('File uploaded successfully:', data.Location);
            // Optionally, you can set the uploaded file URL in state or perform other actions
        }
    });
};




