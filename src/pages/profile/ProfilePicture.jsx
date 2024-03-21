import React, { useState } from 'react';
import './Profile.css'

const ImgUpload = ({ onChange, src }) => (
    <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload">
            <img htmlFor="photo-upload" src={src} alt="Profile" />
        </div>
        <input id="photo-upload" type="file" onChange={onChange} />
    </label>
);

const Profile = ({ src, name, status }) => (
    <div className="card">
        <div className="card-style">
            <h1>Profile Card</h1>
            <label htmlFor="photo-upload" className="custom-file-upload fas">
                <div className="img-wrap">
                    <img htmlFor="photo-upload" src={src} alt="Profile" />
                </div>
            </label>
        </div>
    </div>
);

const Edit = ({ children }) => (
    <div className="card">
        {children}

    </div>
);

const ProfilePicture = () => {
    const [file, setFile] = useState('');
    const [imagePreviewUrl, setImagePreviewUrl] = useState(
        'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true'
    );
    const [active, setActive] = useState('edit');
    const photoUpload = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const selectedFile = e.target.files[0];

        reader.onloadend = () => {
            setFile(selectedFile);
            setImagePreviewUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    return (
        <div>
            {active === 'edit' ? (
                <Edit>
                    <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
                </Edit>
            ) : (
                <Profile src={imagePreviewUrl} />
            )}
        </div>
    );
};

export default ProfilePicture;
