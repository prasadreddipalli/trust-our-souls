import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import { Buffer } from 'buffer';
import './Profile.css';




const ProfilePicture = ({ name,image,setImage , handleInputChange }) => {
 

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const selectedFile = e.target.files[0];

    reader.onloadend = () => {
      handleInputChange(name, selectedFile);
      setImage(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };


  return (
    <div>
      <div className="card">
        <label htmlFor={name} className="custom-file-upload fas">
          <div className="img-wrap img-upload">
            <img src={image} alt={name} />
          </div>
          <input id={name} type="file" onChange={photoUpload} />
        </label>
      </div>
    </div>
  );
};

export default ProfilePicture;
