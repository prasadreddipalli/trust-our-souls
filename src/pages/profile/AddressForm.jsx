import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/base/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Avatar from '@mui/material/Avatar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProfilePicture from './ProfilePicture.jsx';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import profileImage from '../../images/profile.jpg'
import idCardImage from '../../images/idCard.png'
import personImage from '../../images/person.png'


const AddressForm = ({ formData, handleInputChange, validationStatus, nextButtonClicked, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <ProfilePicture name="profile_picture" image={personImage}  handleInputChange={handleInputChange}/>
            <br />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProfilePicture name="id_picture" image={idCardImage} handleInputChange={handleInputChange}/>
            <br />
            </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="first_name"
              name="first_name"
              label="First name"
              value={formData.first_name}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              fullWidth
              autoComplete="given-name"
              style={{ border: nextButtonClicked && !validationStatus.first_name ? '1px solid red' : '' }}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="middle_name"
              name="middle_name"
              label="Middle Name"
              value={formData.middle_name}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="last_name"
              name="last_name"
              label="Last name"
              value={formData.last_name}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              fullWidth
              autoComplete="family-name"
              style={{ border: nextButtonClicked && !validationStatus.last_name ? '1px solid red' : '' }}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="gender" required>Gender</InputLabel>
              <Select
                required
                id="gender"
                value={formData.gender}
                name="gender"
                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                style={{ border: nextButtonClicked && !validationStatus.gender ? '1px solid red' : '' }}
                label="Gender"

              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>

            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} >
          <LocalizationProvider dateAdapter={AdapterDayjs} 
          >
          <InputLabel htmlFor="date_of_birth" style={{ border:  nextButtonClicked && !validationStatus.date_of_birth ? '1px solid red' : '' }} required>Birth Day</InputLabel>
          <DemoContainer components={['DatePicker']} >
            <DatePicker 
              value={formData.date_of_birth ? dayjs(formData.date_of_birth) : null}
              name="date_of_birth"
              id="date_of_birth"
              selected={formData.date_of_birth}
              onChange={(date) => handleInputChange('date_of_birth', date)}
            />
          </DemoContainer>
        </LocalizationProvider>

          </Grid>
          <Grid item xs={12} sm={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <InputLabel htmlFor="time_of_birth" required>Birth Time</InputLabel>
              <DemoContainer components={['TimePicker']}>
                <TimePicker 
                 id="time_of_birth" name="time_of_birth" selected={formData.time_of_birth}  
                 value={formData.time_of_birth ? dayjs(formData.time_of_birth, 'HH:mm') : null}
                 onChange={(date) => handleInputChange('time_of_birth', date)}
                 />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="place_of_birth"
              name="place_of_birth"
              label="Place Of Birth"
              value={formData.place_of_birth}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              style={{ border: nextButtonClicked && !validationStatus.place_of_birth ? '1px solid red' : '' }}
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
          </Grid>
          <Grid item xs={12} sm={4}>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address1"
              name="address1"
              label="Address line 1"
              value={formData.address1}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              value={formData.address2}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="city"
              name="city"
              label="City"
              value={formData.city}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              value={formData.state}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="zip"
              name="zip"
              label="Zip / Postal code"
              value={formData.zip}
              type="number"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              value={formData.country}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              style={{ border: nextButtonClicked && !validationStatus.country ? '1px solid red' : '' }}
              fullWidth
              autoComplete="shipping country"
              variant="standard"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default AddressForm;