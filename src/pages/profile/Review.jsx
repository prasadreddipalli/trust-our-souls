import React, { useContext, useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';


const Review = ({ formData,profileImage,idImage}) => {

  console.log("idImg ..."+idImage);
  
  const [profileImg, setProfileImg] = useState(profileImage);
  const [idImg, setIdImag] = useState(idImage);

 
  const [profileBlob, setProfileBlob] = useState();
  const [idBlob, setIdBlob] = useState();

  useEffect(() => {
    console.log("Profile Picture "+ formData.profile_picture);
    console.log("ID Picture "+ formData.id_picture);

    console.log("profileImg.result ..."+profileImg.result)

   // setShowProfileImg(URL.createObjectURL(profileImg));

    if (formData.profile_picture != null && formData.profile_picture instanceof File){
      const extension = formData.profile_picture.name.split('.').pop();
      formData.profile_picture = formData.first_name+"_"+ formData.last_name+"_ID."+extension;

    }

    if (formData.id_picture != null && formData.id_picture instanceof File){
      const extension = formData.id_picture.name.split('.').pop();
      formData.id_picture = formData.first_name+"_"+ formData.last_name+"_ID."+extension;
      //setIdImage(formData.id_picture);
    }


  }, []);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
      <div className="card">
          <img src={profileImg} alt="Profile" />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
        <div className="card">
          <img  src={idImg} alt="Identification" />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Name & Address
          </Typography>
          <Typography gutterBottom>First Name: {formData.first_name}</Typography>
          <Typography gutterBottom>Last Name: {formData.last_name}</Typography>
          <Typography gutterBottom>Date of Birth: {dayjs(formData.date_of_birth).format('DD-MM-YYYY')}</Typography>
          <Typography gutterBottom>Time of Birth: {formData.time_of_birth}</Typography>
          <Typography gutterBottom>Place Of Birth: {formData.place_of_birth}</Typography>
          <Typography gutterBottom>Gender: {formData.gender}</Typography>
          <Typography gutterBottom>Address Line 1: {formData.address1}</Typography>
          <Typography gutterBottom>Address Line 2: {formData.address2}</Typography>
          <Typography gutterBottom>City: {formData.city}</Typography>
          <Typography gutterBottom>State: {formData.state}</Typography>
          <Typography gutterBottom>Zip / Postal Code: {formData.zip}</Typography>
          <Typography gutterBottom>Country: {formData.country}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Personal Information
          </Typography>
          <Typography gutterBottom>Profession: {formData.profession}</Typography>
          <Typography gutterBottom>Title: {formData.profession_title}</Typography>
          <Typography gutterBottom>Company: {formData.profession_company}</Typography>
          <Typography gutterBottom>Income: {formData.income}</Typography>
          <Typography gutterBottom>RelationShip Status: {formData.relationship_status}</Typography>
          <Typography gutterBottom>Children: {formData.no_of_children}</Typography>
          <Typography gutterBottom>Regilious Belief: {formData.religious_belief}</Typography>
          <Typography gutterBottom>Enthicity: {formData.ethinicity}</Typography>
          <Typography gutterBottom>Gothra: {formData.gothra}</Typography>
          <Typography gutterBottom>Eating Habits: {formData.eating_habits}</Typography>
          <Typography gutterBottom>Start a Family ?: {formData.start_a_family}</Typography>
          <Typography gutterBottom>Somke ?: {formData.smoke_frequency}</Typography>
          <Typography gutterBottom>Alcohol Comsumption ?: {formData.alcohol_frequency}</Typography>

        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Partner Preferences
          </Typography>
          <Typography gutterBottom>Gender: {formData.preferred_gender}</Typography>
          <Typography gutterBottom>Education:: {formData.preferred_education}</Typography>
          <Typography gutterBottom>Location: {formData.preferred_location}</Typography>
          <Typography gutterBottom>Profession: {formData.preferred_profession}</Typography>
          <Typography gutterBottom>Low Age: {formData.preferred_low_age_range}</Typography>
          <Typography gutterBottom>High Age: {formData.preferred_high_age_range}</Typography>
          <Typography gutterBottom>Prefered Eating Habits: {formData.preferred_eating_habits}</Typography>
          <Typography gutterBottom>Comments: {formData.comments}</Typography>

        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Review;