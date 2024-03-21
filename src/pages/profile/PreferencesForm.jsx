import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
//import { Select as BaseSelect, selectClasses } from '@mui/base/Select';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import Textarea from '@mui/joy/Textarea';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { styled, Box } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

const PreferencesForm = ({ formData, handleInputChange, validationStatus, nextButtonClicked }) => {

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={formData.preferred_gender}
              name="preferred_gender"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              style={{ border: nextButtonClicked && !validationStatus.preferred_gender ? '1px solid red' : '' }}
              label="Prefered Gender"
              required
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="preferred_education"
            name="preferred_education"
            label="Education"
            value={formData.preferred_education}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="preferred_location"
            name="preferred_location"
            label="Location"
            value={formData.preferred_location}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="preferred_profession"
            name="preferred_profession"
            label="Profession"
            value={formData.preferred_profession}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            AGE RANGE
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} container spacing={2}>
          <Grid item xs={6}>
            <TextField
              required
              id="preferred_low_age_range"
              name="preferred_low_age_range"
              label="Low"
              value={formData.preferred_low_age_range}
              type="number"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              inputProps={{ maxLength: 2 }} 
              sx={{ width: '60px' }} 
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="preferred_high_age_range"
              name="preferred_high_age_range"
              label="High"
              value={formData.preferred_high_age_range}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              type="number"
              inputProps={{ maxLength: 2 }} 
              sx={{ width: '60px' }} 
            
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            id="preferred_eating_habits"
            name="preferred_eating_habits"
            label="Eating Habits"
            value={formData.preferred_eating_habits}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <InputLabel id="comments">Comments</InputLabel>
          <textarea
            id="comments"
            name="comments"
            placeholder="Enter comments..."
            value={formData.comments}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            autoComplete="given-name"
            style={{
              width: '100%',
              height: 200,
              resize: 'vertical', // Allow vertical resizing
            }}
          />

        </Grid>

      </Grid>
    </React.Fragment>
  );
}
export default PreferencesForm;