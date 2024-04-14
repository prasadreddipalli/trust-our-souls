import React from "react";
import Grid from '@mui/material/Grid';
import TitleContent from '../components/TtileContent'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
 
export const Services = () => {

    const healingProps = {
        title: 'Energy healing',
        description:
            "Our Energy Healing sessions are designed to help you release negative energy and restore balance to your mind, body, and soul. \
            Using a combination of Reiki, crystal healing, and other modalities, we can help you overcome physical and emotional pain, and unlock your full \
            potential. Schedule your session with TrustOurSouls today.\
            ",
        image: {},
        backgroundColor: 'burlywood'
    };

    const horoscopeProps = {
        title: 'Horoscope reading',
        description:
            "At TrustOurSouls, we believe that lasting relationships are built on shared values and a deep understanding of one another. \
            Our unique Horoscope Matching service helps you identify your most compatible partner, based on the stars and your unique personality traits. \
            Get in touch to learn more and schedule your session.",
        image: {},
        backgroundColor: 'burlywood'
    };
    return (
        <Grid container >
            <Grid item xs={12} sx={{ boxShadow: 0 }}>
                <TitleContent props={healingProps} />
            </Grid>
            <Grid item xs={12} sx={{ boxShadow: 0 }}>
                <TitleContent props={horoscopeProps} />
            </Grid>
        </Grid>
    );
};
