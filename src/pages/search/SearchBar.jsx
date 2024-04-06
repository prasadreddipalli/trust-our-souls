import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Divider } from "@mui/material";
import Grid from '@mui/material/Grid';

import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SearchBar = ({ onSearch }) => {
    const [searchFields, setSearchFields] = useState({
        first_name: '',
        gender: '',
        last_name: '',

    });
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleSearchFieldChange = (field, value) => {
        setSearchFields({ ...searchFields, [field]: value });
    };

    const handleSearch = () => {
        // Pass the searchFields state to the parent component for further processing
        onSearch(searchFields);
    };


    const handleToggleCollapse = () => {
        setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleToggleCollapse}
                    >
                        {isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Search
                    </Typography>
                </Toolbar>
                <Box sx={{ width: "100%" }}>
                    {isCollapsed ? <>
                        <Grid container sx={{ backgroundColor: "white" }} spacing={3}></Grid>
                    </> :
                        <Grid container sx={{ backgroundColor: "white" }} spacing={3}>
                            
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="First Name"
                                    value={searchFields.first_name}
                                    onChange={(e) =>
                                        handleSearchFieldChange("first_name", e.target.value)
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Last Name"
                                    value={searchFields.last_name}
                                    onChange={(e) =>
                                        handleSearchFieldChange("last_name", e.target.value)
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    label="Gender"
                                    value={searchFields.gender}
                                    onChange={(e) =>
                                        handleSearchFieldChange("gender", e.target.value)
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}></Grid>
                            <Grid item xs={12} sm={4}></Grid>
                            <Grid item xs={12} sm={4}>
                                <Button
                                    variant="contained"
                                    onClick={handleSearch}
                                    endIcon={<span>&#128269;</span>}
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    }
                </Box>

            </AppBar>
        </>
    );

};


export default SearchBar;
