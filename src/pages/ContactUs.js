
import React from "react";
import Grid from '@mui/material/Grid';
import TitleContent from '../components/TtileContent'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Contact = () => {
    return (
        <Grid item xs={12} sx={{ boxShadow: 0 }}>
        <Typography component="h1" variant="h6" color="inherit" gutterBottom>
            &nbsp;Contact us at trustoursouls@gmail.com or whatsapp +15713539500
        </Typography>
    </Grid>
    );
};
export default Contact;
