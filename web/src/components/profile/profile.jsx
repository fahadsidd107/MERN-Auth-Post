import { useState, useEffect } from "react"
import { Grid } from '@mui/material';
import { useHistory } from "react-router-dom";
import * as React from 'react';
import { GlobalContext } from "../../context/Context";
import { useContext } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Profile() {
  let history = useHistory();
  let { state, dispatch } = useContext(GlobalContext);
  return (
    <div style={{ padding: "1rem" }}>
          <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome {state.user.name}
        </Typography>
        <Button onClick={() => {history.push("/posts");}} variant="contained" color="error" >Posts</Button>
        <Button  onClick={() => {
                   
                      history.push("/login");
                      dispatch({
                        type: "LOGOUT",
                        payload: null,
                      });
              
                  }} variant="contained" color="error">Logout</Button>

      </Toolbar>
    </AppBar>
  </Box>
      <h1 style={{ margin: "auto", padding: "1rem", textAlign: "center" }}>Profile Info</h1>
      <br />
      <Typography gutterBottom  >
            Name: {state.user.name}<br />Email: {state.user.email}<br />Contact: {state.user.contact}<br />website: {state.user.website}<br />Address: {state.user.address}
          </Typography>
      <br /><br />
    </div>
  );
}

export default Profile;