import React, { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table";

import  SearchBar  from './SearchBar'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { fetchALlUserProfiles,fetchProfiles ,getFileFromS3} from '../../services';



export default function SearchPage() {

    const [data, setData] = React.useState(0);
    const [profileImage, setProfileImage] = useState();
    const [idImage, setIdImage] = useState();


    const fetchData = async (name) => {
      try {
     
         const profileImage = await getFileFromS3(name + "_profile");
         const idImage = await getFileFromS3(name + "_id");
          setProfileImage(profileImage);
          setIdImage(idImage);
        
      } catch (error) {
        console.log("OnLoad "+ error);
      }
    }

  
    React.useEffect(() => {
       
         const fetchData = async () => {
          try {
            const data = await fetchALlUserProfiles();
            setData(data);
            console.log(" from DB " + JSON.stringify(data));
          } catch (error) {
            // Handle error
          }
        }
    
        fetchData();
      }, []);

      const handleSearch = async (searchValue) => {
        try {
         const searchData = await fetchProfiles(searchValue);
          setData(searchData);
        } catch (error) {
          console.error("Error searching data:", error);
        }
      };

  const columns = useMemo(
    () => [
      {
        accessorKey: "first_name", 
        header: "First Name",
        muiTableHeadCellProps: { sx: { color: "#1976d2" } }, 
         Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> 
      },
      {
        accessorKey: "last_name", 
        header: "LastName" ,
        muiTableHeadCellProps: { sx: { color: "#1976d2" } }, 
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> 
      },
      {
        accessorKey: "gender", 
        header: "Gender" ,
        muiTableHeadCellProps: { sx: { color: "#1976d2" } }, 
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> 
      },
      {
        accessorKey: "date_of_birth", 
        header: "Date Of Birth" ,
        muiTableHeadCellProps: { sx: { color: "#1976d2" } }, 
        Cell: ({ renderedCellValue }) => {
          const date = new Date(renderedCellValue);
          const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
          return <strong>{formattedDate}</strong>;
        }
      },
      {
        accessorKey: "place_of_birth", 
        header: "Place of Birth" ,
        muiTableHeadCellProps: { sx: { color: "#1976d2" } }, 
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> 
      }
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableExpandAll: false, //disable expand all button
    muiDetailPanelProps: () => ({
      sx: (theme) => ({
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(255,210,244,0.1)'
            : 'rgba(0,0,0,0.1)',
      }),
    }),
    //custom expand button rotation
    muiExpandButtonProps: ({ row, table }) => ({
      onClick: () => { 

       
        fetchData(row.original.first_name+"_"+ row.original.last_name);
      

        table.setExpanded({ [row.id]: !row.getIsExpanded() })
      }, //only 1 detail panel open at a time
      sx: {
        transform: row.getIsExpanded() ? 'rotate(180deg)' : 'rotate(-90deg)',
        transition: 'transform 0.2s',
      },
    }),
    //conditionally render detail panel
    renderDetailPanel: ({ row }) =>
      row.original.first_name ? (
        <Box
          sx={{
            display: 'grid',
            margin: 'auto',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
          }}
        >
           <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
      <div className="card">
          <img src={profileImage} alt="Profile" /> 
          </div>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
        <div className="card">
         <img  src={idImage} alt="Identification" /> 
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Name & Address
          </Typography>
          <Typography gutterBottom>Gender: {row.original.gender}</Typography>
          <Typography gutterBottom>Address Line 1: {row.original.address1}</Typography>
          <Typography gutterBottom>Address Line 2: {row.original.address2}</Typography>
          <Typography gutterBottom>City: {row.original.city}</Typography>
          <Typography gutterBottom>State: {row.original.state}</Typography>
          <Typography gutterBottom>Zip / Postal Code: {row.original.zip}</Typography>
          <Typography gutterBottom>Country: {row.original.country}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Personal Information
          </Typography>
          <Typography gutterBottom>Profession: {row.original.profession}</Typography>
          <Typography gutterBottom>Title: {row.original.profession_title}</Typography>
          <Typography gutterBottom>Company: {row.original.profession_company}</Typography>
          <Typography gutterBottom>Income: {row.original.income}</Typography>
          <Typography gutterBottom>RelationShip Status: {row.original.relationship_status}</Typography>
          <Typography gutterBottom>Children: {row.original.no_of_children}</Typography>
          <Typography gutterBottom>Regilious Belief: {row.original.religious_belief}</Typography>
          <Typography gutterBottom>Enthicity: {row.original.ethinicity}</Typography>
          <Typography gutterBottom>Gothra: {row.original.gothra}</Typography>
          <Typography gutterBottom>Eating Habits: {row.original.eating_habits}</Typography>
          <Typography gutterBottom>Start a Family ?: {row.original.start_a_family}</Typography>
          <Typography gutterBottom>Somke ?: {row.original.smoke_frequency}</Typography>
          <Typography gutterBottom>Alcohol Comsumption ?: {row.original.alcohol_frequency}</Typography>

        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Partner Preferences
          </Typography>
          <Typography gutterBottom>Gender: {row.original.preferred_gender}</Typography>
          <Typography gutterBottom>Education:: {row.original.preferred_education}</Typography>
          <Typography gutterBottom>Location: {row.original.preferred_location}</Typography>
          <Typography gutterBottom>Profession: {row.original.preferred_profession}</Typography>
          <Typography gutterBottom>Low Age: {row.original.preferred_low_age_range}</Typography>
          <Typography gutterBottom>High Age: {row.original.preferred_high_age_range}</Typography>
          <Typography gutterBottom>Prefered Eating Habits: {row.original.preferred_eating_habits}</Typography>
          <Typography gutterBottom>Comments: {row.original.comments}</Typography>

        </Grid>
      </Grid>
    
        </Box>
      ) : null,
  });
  /*const table = useMaterialReactTable({
    data,
    columns
  });*/

  return (
    <>
      <MaterialReactTable table={table} />
    </>
  );
}
