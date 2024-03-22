import React, { useContext, useState, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PersnoalDetailsForm from './PersnoalDetailsForm';
import PreferencesForm from './PreferencesForm';
import Review from './Review';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getUserFromLocalStorage, saveUserToLocalStorage } from '../../firebase/auth'
import { fetchUserProfile, addUseProfile } from '../../services';
import { ToastContainer } from 'react-toastify';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const steps = ['Name & address', 'Personal Details', 'Preferences', 'Review'];

export default function Profile() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [stepData, setStepData] = useState({});
  const [nextButtonClicked, setNextButtonClicked] = useState(false);
  const [formData, setFormData] = useState({
    profilePicture: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    title: '',
    date_of_birth: '',
    time_of_birth: '',
    place_of_birth: '',
    gender: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',

    religious_belief: '',
    gothra: '',
    relationship_status: '',
    no_of_children: '',
    ethinicity: '',
    education: '',
    profession: '',
    profession_title: '',
    profession_company: '',
    eating_habits: '',
    income: '',
    start_a_family: '',
    smoke: '',
    smoke_frequency: '',
    alcohol: '',
    alcohol_frequency: '',
    reason_description: '',

    preferred_gender: '',
    preferred_education: '',
    preferred_education: '',
    preferred_profession: '',
    preferred_low_age_range: '',
    preferred_high_age_range: '',
    preferred_eating_habits: '',
    comments: ''
  });

  const [validFieldsAddress, setValidFieldsAddress] = useState({
    first_name: false,
    last_name: false,
    gender: false,
    date_of_birth: false,
    place_of_birth: false,
    country: false,
    time_of_birth: false
  });

  const [validFieldsPersonal, setValidFieldsPersonal] = useState({
    profession: false,
    relationship_status: false,
    income: false,
    start_a_family: false,
    no_of_children: false,
    smoke_frequency: false,
    alcohol_frequency: false,
  });

  const [validFieldsPreferences, setValidFieldsPreferences] = useState({
    preferred_gender: false,
    preferred_low_age_range: false,
    preferred_high_age_range: false,
  });

  const validateStep = (stepNo) => {
    let newValidFields = {};
    switch (stepNo) {
      case 0: newValidFields = updateValidFeilds(validFieldsAddress);
        setValidFieldsAddress(newValidFields);
        break;
      case 1: newValidFields = updateValidFeilds(validFieldsPersonal);
        setValidFieldsPersonal(newValidFields);
        break;
      case 2: newValidFields = updateValidFeilds(validFieldsPreferences);
        setValidFieldsPreferences(newValidFields);
        break;
    }
    return Object.values(newValidFields).every((value) => value === true);
  };

  const updateValidFeilds = (validFields) => {
    const newValidFields = { ...validFields };
    console.log("====== updateValidFeilds =========");
    Object.entries(formData).forEach(([name, value]) => {
      console.log(" field name " + name + " : " + value + " type " + typeof formData[name]);
      if (validFields.hasOwnProperty(name)) {
        if (typeof formData[name] === 'string' && formData[name].trim() === '') {
          newValidFields[name] = false;
        } else {
          newValidFields[name] = true;
        }
        if (name.trim() === 'date_of_birth') {
          newValidFields[name] = isValidBirthDate(value);
        }
        console.log(" status name " + name + " " + newValidFields[name]);
      }
    });
    console.log("=================================");
    return newValidFields;
  }

  function isValidBirthDate(dateString) {
    const parsedDate = new Date(dateString);
    const currentDate = new Date();
    if (parsedDate.getTime() > currentDate.getTime()) {
      toast.error('Future date entered');
      return false;
    }
    const minDate = new Date('1900-01-01');
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 18);
    if (parsedDate < minDate || parsedDate > maxDate) {
      toast.error('Age cannot be less than 18 years');
      return false;
    }
    return true;
  }
  function isValidAgeRange() {
    const { preferred_low_age_range, preferred_high_age_range } = formData;
    const lowAge = parseInt(preferred_low_age_range);
    const highAge = parseInt(preferred_high_age_range);
    const isValidAgeRange = highAge > lowAge;

    if (!isValidAgeRange && (validFieldsPreferences.preferred_low_age_range && validFieldsPreferences.preferred_high_age_range)) {
      toast.error('Low age cannot be grerater than High age');
      return false;
    }
    return true;
  }


  const handleInputChange = (name, value) => {
    if (name.trim() === 'time_of_birth') {
      value = value.format('HH:mm');
    }

    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: value
      };
      return updatedFormData;
    });
  };

  useEffect(() => {
    validateStep(activeStep);
  }, [formData, activeStep]);

  const theme = createTheme({
    components: {
      MuiGrid: {
        styleOverrides: {
          root: {
            '& .MuiGrid-item': {
              paddingTop: '5px', // Adjust the padding-top value as needed
            },
          },
        },
      },
    },
  });

  const getStepContent = (step, formData, nextButtonClicked) => {
    switch (step) {
      case 0:
        return <AddressForm formData={formData} handleInputChange={handleInputChange} validationStatus={validFieldsAddress} nextButtonClicked={nextButtonClicked} theme={theme} />;
      case 1:
        return <PersnoalDetailsForm formData={formData} handleInputChange={handleInputChange} validationStatus={validFieldsPersonal} nextButtonClicked={nextButtonClicked} />;
      case 2:
        return <PreferencesForm formData={formData} handleInputChange={handleInputChange} validationStatus={validFieldsPreferences} nextButtonClicked={nextButtonClicked} />;
      case 3:
        return <Review formData={formData} />;
      default:
        throw new Error('Unknown step');
    }
  };

  const handleNext = (activeStep) => {
    let isValid = false;
    setNextButtonClicked(true);
    isValid = validateStep(activeStep);
    if (activeStep == 2) {
      if (!isValidAgeRange()) {
        return;
      }
    }
    console.log("isValid " + isValid);
    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    if (activeStep == steps.length - 1) {
      saveUserProfile();
    }
  };

  const saveUserProfile = async () => {
    const user = getUserFromLocalStorage();
    console.log("user from localstorage " + user);
    const mapFormDataToProfileData = (formData) => {
      return {
        uid: user.uid,
        // profile_picture: formData.profilePicture,
        first_name: formData.first_name,
        middle_name: formData.middle_name,
        last_name: formData.last_name,
        title: formData.title,
        date_of_birth: new Date(formData.date_of_birth).toISOString().split('T')[0],
        time_of_birth: formData.time_of_birth,
        place_of_birth: formData.place_of_birth,
        gender: formData.gender,
        address1: formData.address1,
        address2: formData.address2,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        country: formData.country,
        religious_belief: formData.religious_belief,
        gothra: formData.gothra,
        relationship_status: formData.relationship_status,
        no_of_children: formData.no_of_children,
        ethnicity: formData.ethinicity,
        education: formData.education,
        profession: formData.profession,
        profession_title: formData.profession_title,
        profession_company: formData.profession_company,
        eating_habits: formData.eating_habits,
        income: formData.income,
        start_a_family: formData.start_a_family,
        smoke_frequency: formData.smoke_frequency,
        alcohol_frequency: formData.alcohol_frequency,
        reason_description: formData.reason_description,
        preferred_gender: formData.preferred_gender,
        preferred_education: formData.preferred_education,
        preferred_location: formData.preferred_location,
        preferred_profession: formData.preferred_profession,
        preferred_low_age_range: formData.preferred_low_age_range,
        preferred_high_age_range: formData.preferred_high_age_range,
        preferred_eating_habits: formData.preferred_eating_habits,
        comments: formData.comments,
      }
    }

    const profileData = mapFormDataToProfileData(formData);
    try {
      const resp = await addUseProfile(profileData);
    } catch (error) {
      // Handle error
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  React.useEffect(() => {
    setActiveStep(0);
    // formData['date_of_birth'] = new Date();
    const user = getUserFromLocalStorage();
    const fetchData = async (userId) => {
      try {
        const data = await fetchUserProfile(userId);
        console.log(" from DB " + JSON.stringify(data));
        setFormData(data);
      } catch (error) {
        // Handle error
      }
    }

    fetchData(user.uid);
  }, []);


  return (
        <Container component="main" sx={{ mb: 4, width: '100%', overflow: 'hidden' }}>
      <Typography component="h1" variant="h4" align="center">
        Profile
      </Typography>
      <ToastContainer toastStyle={{ width: '350px' }} />
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>

        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography variant="h5" gutterBottom>
            Your profile has been saved.
          </Typography>
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {getStepContent(activeStep, formData, nextButtonClicked)}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>
            )}
            <Button
              variant="contained"
              onClick={() => handleNext(activeStep)}
              sx={{ mt: 3, ml: 1 }}
            >
              {activeStep === steps.length - 1 ? 'Save' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Container>
  );
}