import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../images/landing.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth } from '../contexts/authContext';
import Login from './auth/login';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import CardActionArea from '@mui/material/CardActionArea';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import pp from "../images/pp.jpg";
import dc from "../images/dc.png"
import sp from "../images/sp.jpg"
import sc from "../images/sc.png"
import story from "../images/story.jpg"
import fm from "../images/fm.jpeg"
import bc from "../images/bc.png"
import oo from "../images/oo.jpg"
import tot from "../images/tot.jpg"

import TitleContent from './TtileContent'

const MainPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    navigate('/dashboard/login');
  };
  const tileProps = {
    title: 'Welcome to Trust Our Souls',
    description:
      "At Trust Our Souls we bring together 67 years of experience in curating soulful relationships! We believe in the power of connection. Our mission is to help you find not just a match, \
      but a partnership that is rich in understanding, compatibility, and enduring love. Here, we’re more than a matchmaking site; we’re your guide on the journey to finding a meaningful and lasting relationship. We are your sherpas! \
      When you onboard with us, you are sure to leave the stress, headache and mundane dating and matrimonial relationship search. \
      With our iterative and proven process of blending cosmic and astronomical compatibility with neurodiversity compatibility, we assist you in finding your soulmate that you can cherish your entire life! \
      ",
    image: { tot },
    backgroundColor : 'burlywood'
  };
 
  const cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '100%'
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const ProcessCard = ({ image, title, content }) => {
    return (
      <Card sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardActionArea style={{ flex: 1 }}>
          <CardMedia
            component="img"
            sx={{ height: '18vw',backgroundColor: 'bisque' }}
            image={image}
            alt={title}
          />
        </CardActionArea>
        <CardContent style={{ flex: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography paragraph sx={{ backgroundColor: '#0c3150' }}>
            {content}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const CustomCard = ({ image, title, content }) => {
    return (
      <Card style={cardStyle} sx={{ maxWidth: 360 }}>
        <Box sx={{ p: 1 }}>
          <CardHeader
            avatar={
              <Avatar src={image} >
              </Avatar>
            }
            title={title}
            titleTypographyProps={{ variant: 'h6' }}
          />
        </Box>
        <Divider />
        <CardContent>
          <Typography paragraph>{content}</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ boxShadow: 0 }}>
          <TitleContent props={tileProps} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'beige' }}>
          <Typography variant="h5" gutterBottom style={{ fontSize: '24px', }}>
            How We're Different
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CustomCard image={pp} title="Personalized Approach" content="Say goodbye to endless swiping and superficial connections. Our unique algorithm and personalized matchmaking approach focus on the quality of matches, not quantity, ensuring that you meet individuals who truly complement your personality and life goals." />
            </Grid>
            <Grid item xs={3}>
              <CustomCard image={dc} title="Deep Compatibility" content="We delve deeper than surface-level preferences. Our comprehensive compatibility assessment considers your interests, values, lifestyle, and relationship goals to connect you with matches on a profound level. We even go one level deeper to blend cosmic and astronomical compatibility to truly find the right one for you!" />
            </Grid>
            <Grid item xs={3}>
              <CustomCard image={sp} title="Safety and Privacy First" content="Your safety and privacy are crucial. With state-of-the-art security measures, your data and conversations are always protected, allowing you to search for love with peace of mind." />
            </Grid>
            <Grid item xs={3}>
              <CustomCard image={sc} title="Supportive Community" content="Join a community of like-minded individuals who are all seeking something more meaningful from their relationships. Share experiences, advice, and encouragement as you navigate your path to love." />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid container xs={12}>
         <Paper elevation={0} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h5" gutterBottom style={{ fontSize: '24px' }}>
              Our Process
            </Typography>
            <Grid container spacing={2} sx={{ height: '80%' }}>
              <Grid item xs={3} sx={{ height: '80%' }}>
                <ProcessCard image={story} title="Create Your Own Story" content="Signing up is the first step towards finding your true love. Create a profile that reflects who you are, sharing your passions, desires, and what you are looking for in a partner leveraging our proprietary blend of questions." />
              </Grid>
              <Grid item xs={3} sx={{ height: '80%' }}>
                <ProcessCard image={fm} title="Find Your Match" content="Utilize our sophisticated algorithm which pairs you with potential matches based on deep compatibility factors, ensuring those you meet truly resonate with your personal values and life aspirations." />
              </Grid>
              <Grid item xs={3} sx={{ height: '60%' }}>
                <ProcessCard image={bc} title="Build a Connection" content="Once you've found a match that catches your eye, use our intuitive communication tools to start a meaningful conversation. We guide you throughout the process and are always by your side!" />
              </Grid>
              <Grid item xs={3} sx={{ height: '80%' }}>
                <ProcessCard image={oo} title="From Online to Offline" content="When the time feels right, take the leap from online chats to real-world dates. We offer plenty of tips and suggestions to help you plan a perfect first meeting and keep it going!" />
              </Grid>
            </Grid>
          </Paper>
      </Grid>
    </Grid>
  );
};

export default MainPage;
