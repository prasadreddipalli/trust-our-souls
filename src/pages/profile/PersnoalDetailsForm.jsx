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

const PersnoalDetailsForm = ({ formData, handleInputChange, validationStatus, nextButtonClicked, theme }) => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="profession"
            name="profession"
            label="Profession"
            value={formData.profession}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            style={{ border: nextButtonClicked && !validationStatus['profession'] ? '1px solid red' : '' }}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="profession_title"
            name="profession_title"
            label="Title"
            value={formData.profession_title}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="profession_company"
            name="profession_company"
            label="Company"
            value={formData.profession_company}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="income"
            name="income"
            label="Income"
            value={formData.income}
            style={{ border: nextButtonClicked && !validationStatus['income'] ? '1px solid red' : '' }}
            type='number'
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="relationship_status" required>RealtionShip Status</InputLabel>
            <Select
              id="relationship_status"
              name="relationship_status"
              value={formData.relationship_status}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              label="RealtionShip Status"
              style={{ border: nextButtonClicked && !validationStatus['relationship_status'] ? '1px solid red' : '' }}
              required
            >
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
              <MenuItem value="Divorced">Divorced</MenuItem>
            </Select>

          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="no_of_children"
            name="no_of_children"
            label="Children"
            value={formData.no_of_children}
            type="number"
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            style={{ border: nextButtonClicked && !validationStatus['no_of_children'] ? '1px solid red' : '' }}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="religious_belief"
            name="religious_belief"
            label="Reglious Belief"
            value={formData.religious_belief}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="ethinicity"
            name="ethinicity"
            label="Ethinicity"
            value={formData.ethinicity}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="gothra"
            name="gothra"
            label="Gothra"
            value={formData.gothra}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            id="eating_habits"
            name="eating_habits"
            label="Eating Habits"
            value={formData.eating_habits}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel style={{ display: 'flex', flexDirection: 'row' }}>Start a Family ?</FormLabel>
          <span>
            <FormControl component="fieldset" style={{ display: 'flex', flexDirection: 'row' }}>
              <RadioGroup
                id="start_a_family"
                name="start_a_family"
                value={formData.start_a_family ? formData.start_a_family.trim() : ''}
                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
                <FormControlLabel value="maybe" control={<Radio />} label="Maybe" /> </RadioGroup>
            </FormControl>
          </span>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel style={{ display: 'flex', flexDirection: 'row' }}>Smoke ?</FormLabel>
          <span>
            <FormControl component="fieldset" style={{ display: 'flex', flexDirection: 'row' }}>

              <RadioGroup
                id="smoke_frequency"
                name="smoke_frequency"
                value={formData.smoke_frequency ? formData.smoke_frequency.trim() : ''}
                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <FormControlLabel value="frequent" control={<Radio />} label="frequently" />
                <FormControlLabel value="occassinal" control={<Radio />} label="occassinally" />
                <FormControlLabel value="never" control={<Radio />} label="never" /> </RadioGroup>
            </FormControl>
          </span>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormLabel style={{ display: 'flex', flexDirection: 'row' }}>Alcohol Consumption ?</FormLabel>
          <span>
            <FormControl component="fieldset" style={{ display: 'flex', flexDirection: 'row' }}>

              <RadioGroup
                id="alcohol_frequency"
                name="alcohol_frequency"
                value={formData.alcohol_frequency ? formData.alcohol_frequency.trim() : ''}
                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <FormControlLabel value="frequent" control={<Radio />} label="frequently" />
                <FormControlLabel value="occassinal" control={<Radio />} label="occassinally" />
                <FormControlLabel value="never" control={<Radio />} label="never" /> </RadioGroup>
            </FormControl>
          </span>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default PersnoalDetailsForm;