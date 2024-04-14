import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TtleContent = ({ props }) => {
    return (
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: `${props.backgroundColor}`,
          color: `${props.textColor}`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${props.image.tot})`,
        }}
      >
        <Box
          sx={{
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'cadetblue',
          }}
        />
        <Grid container>
          <Grid item md={11}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {props.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {props.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  export default TtleContent;