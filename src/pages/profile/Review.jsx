import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';


const Review = ({ formData }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Grid container spacing={2}>
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
            Preferences
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