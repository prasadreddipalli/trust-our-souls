import React from "react";
import Grid from '@mui/material/Grid';
import TitleContent from '../components/TtileContent'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export const AboutUs = () => {

    const tileProps = {
        title: 'About Us',
        description:
            "At Trust Our Souls we bring together 67 years of experience in curating soulful relationships! We believe in the power of connection. Our mission is to help you find not just a match, \
          but a partnership that is rich in understanding, compatibility, and enduring love. Here, we’re more than a matchmaking site; we’re your guide on the journey to finding a meaningful and lasting relationship. We are your sherpas! \
          When you onboard with us, you are sure to leave the stress, headache and mundane dating and matrimonial relationship search. \
          With our iterative and proven process of blending cosmic and astronomical compatibility with neurodiversity compatibility, we assist you in finding your soulmate that you can cherish your entire life! \
          ‘Trust Our Souls’ service is an invitation only to help you with every step of the relationship search!",
        image: {},
        backgroundColor: 'burlywood'
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sx={{ boxShadow: 0 }}>
                <TitleContent props={tileProps} />
            </Grid>
            <Divider />
           
        </Grid>

    );
};


