import React, { useState } from 'react';
import './Profile.css';

const ImgUpload = ({ name, onChange, src }) => (
  <label htmlFor={name} className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img src={src} alt="Profile" />
    </div>
    <input id={name} type="file" onChange={onChange} />
  </label>
);

const Profile = ({ src, name }) => (
  <div className="card">
    <div className="card-style">
      <h1>Profile Card</h1>
      <label htmlFor={name} className="custom-file-upload fas">
        <div className="img-wrap">
          <img src={src} alt="Profile" />
        </div>
      </label>
    </div>
  </div>
);

const Edit = ({ children }) => <div className="card">{children}</div>;

const ProfilePicture = ({ name, image, handleInputChange }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(image);
  const [active, setActive] = useState('edit');
 
  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const selectedFile = e.target.files[0];

    reader.onloadend = () => {
      handleInputChange(name, selectedFile);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <Edit>
        <ImgUpload name={name} onChange={photoUpload} src={imagePreviewUrl} />
      </Edit>
    </div>
  );
};

export default ProfilePicture;
