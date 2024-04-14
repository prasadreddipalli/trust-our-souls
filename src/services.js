import axios from 'axios';
import AWS from 'aws-sdk';

import { Buffer } from 'buffer';


export const login = async (user) => {
  try {
    const response = await axios.post('http://localhost:3001/login', {
      user: user
    });

    console.log("login response " + response.data);
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

export const fetchProfiles = async (values) => {
  try {
    const response = await axios.post(`http://localhost:3001/profile/search`, {
      search: values,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error; // Throw error to be caught by caller
  }
};


const getImageFileExtension = (image) => {
  if (image instanceof File) {
    const fileName = image.name;
    const extension = fileName.split('.').pop();
    return extension.toLowerCase()
  }
  const mimeType = image.split(';')[0].split(':')[1];   
  const fileExtension = mimeType.split('/')[1];
  return fileExtension;
};

const getImageBinaryData = (image) =>
{
  const base64Data = image.split(',')[1];
  const binaryData = Buffer.from(base64Data, 'base64');
  return binaryData;
}


// Define the CORS configuration
const corsConfiguration = {
  CORSRules: [
    {
      AllowedHeaders: ['*'],
      AllowedMethods: ['PUT', 'POST', 'DELETE', 'GET', 'HEAD'],
      AllowedOrigins: ['*'],
      ExposeHeaders: ['ETag'],
      MaxAgeSeconds: 3000
    }
  ]
};


export const uploadBlobToS3 = async (fileName,blobUrl ) => {
  try {
    // Fetch the blob data
    const response = await fetch(blobUrl);
    const blobData = await response.blob();

    // Convert blob data to ArrayBuffer
    const arrayBuffer = await blobData.arrayBuffer();

    // Alternatively, convert blob data to base64-encoded string
    const base64Data = await blobToBase64(blobData);

    // Initialize AWS SDK
    AWS.config.update({
      accessKeyId: 'AKIAXYKJTG2EZOYAWPUP',
      secretAccessKey: '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'
    });

    // Upload the blob data to S3
    const s3 = new AWS.S3();
    const params = {
      Bucket: 'trust-our-souls',
      Key: fileName,
      Body: arrayBuffer, // or base64Data
      ContentType: blobData.type // Set the content type based on the blob data type
    };

    const data = await s3.upload(params).promise();
    console.log('File uploaded successfully:', data.Location);
    return data.Location; // Return the URL of the uploaded file
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

// Function to convert Blob to base64-encoded string
const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};



export const uploadToS3 = async (fileName, file) => {

  if (!file) {
    throw new Error('File object is null');
  }
  
  console.log("uploadToS3..file "+ file);

  AWS.config.update({
    accessKeyId: 'AKIAXYKJTG2EZOYAWPUP',
    secretAccessKey: '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'
  });

  const fileContent = await readFile(file);

  const s3 = new AWS.S3();
  const params = {
    Bucket: 'trust-our-souls',
    Key: fileName,
    Body: fileContent,
    ContentType: file.type,
    CORSConfiguration: corsConfiguration
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

// Function to read the content of a File object
const readFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
  //  reader.onload = () => resolve(reader.result);
  //  reader.onerror = (error) => reject(error);
    
    // Convert File object to Blob
    const blob = new Blob([file]);
    reader.readAsArrayBuffer(blob);
  });
};

export const getFileFromS3 = async (fileName) => {

  var retVal='';
  await getImageFromS3(fileName)
  .then(src => {
      retVal= src;
     // console.log("src ....."+ src);
  })
  .catch(error => {
    console.error('Error:', error);
  });
//  console.log("retVal "+ retVal);
  return retVal;
}

export const getImageFromS3 = (fileName) => {
  return new Promise((resolve, reject) => {
    getObjectFromS3('trust-our-souls', fileName)
      .then(src => {
     //   console.log("src " + src);
        resolve(src); // Resolve the promise with the src value
      })
      .catch(error => {
        console.error('Error:', error);
        reject(error); // Reject the promise if there's an error
      });
  });
};



const getObjectFromS3 = async (bucketName, key) => {
  AWS.config.update({
    accessKeyId: 'AKIAXYKJTG2EZOYAWPUP',
    secretAccessKey: '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'
  });

  const params = {
    Bucket: bucketName,
    Key: key
  };

  const s3 = new AWS.S3();

  try {
    const data = await s3.getObject(params).promise();
    const blob = new Blob([data.Body], { type: data.ContentType });

    // Convert the blob to a data URL using FileReader
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error retrieving object from S3:', error);
    return null;
  }
};
/*
export const getFileFromS3 = (fileName) => {

  AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'AKIAXYKJTG2EZOYAWPUP',
    secretAccessKey: '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'
  });

  const s3 = new AWS.S3();

  const params = {
    Bucket: 'trust-our-souls',
    Key: fileName
  };

  s3.getObject(params, (err, data) => {
    if (err) {
      console.error('Error retrieving file from S3:', err);
    } else {
      // 'data.Body' contains the file content as a Buffer
      console.log('File content:', data.Body.toString());
    }
  })
}
*/
