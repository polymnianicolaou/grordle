
import './App.css';
import {Grid, TextField} from "@mui/material"
import React, { Component } from 'react';
const classes = {
  root: {
    flexGrow: 1,  
  },
  paper: {
    padding: 10,
    textAlign: "center",
    color: "blue",
    height: 50,
    width: 50,
    textTransform: "uppercase"

  }
};


class InnerGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx0 : '',
      idx1 : '',
      idx2 : '',
      idx3 : '',
      idx4 : ''
     }; 
  }

  onChange = (event) => {
    const { idx, value } = event.target;
    this.setState({[idx] : value});
    console.log('change', value)
  }

  //user hits enter when in the last column
  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      // write functionality here
      //compare...
    }
  }
  render() {
      return(
      <Grid container >
      <TextField  style={classes.paper} idx="idx0" onChange={this.onChange}
        inputProps={{ 
          maxLength: 1 , 
          style: { textTransform: "uppercase" } }} ></TextField>
      <TextField  style={classes.paper} idx="idx1" onChange={this.onChange}
        inputProps={{ 
          maxLength: 1 , 
          style: { textTransform: "uppercase" } }}></TextField>
      <TextField  style={classes.paper} idx="idx2" onChange={this.onChange}
        inputProps={{ 
          maxLength: 1 , 
          style: { textTransform: "uppercase" } }}></TextField>
      <TextField  style={classes.paper} idx="idx3" onChange={this.onChange}
        inputProps={{ 
          maxLength: 1 , 
          style: { textTransform: "uppercase" } }}></TextField>
      <TextField  style={classes.paper} idx="idx4" onChange={this.onChange}
        inputProps={{ 
          maxLength: 1 , 
          style: { textTransform: "uppercase" } }}
          onKeyPress= {this.onKeyPress}></TextField>
  </Grid>
    );
    }
}

// //the InnerGrid component will be a collection of multiple Grid items
 function NestedGrid() {
  return(
    <div style={classes.root}>
      <Grid container spacing={1} >
          {/*Render innerGrid as a child item */}
          <InnerGrid />
          <InnerGrid />
          <InnerGrid />
          <InnerGrid />
          <InnerGrid />
          <InnerGrid />
      </Grid> 
    </div>
  );
}

export default NestedGrid;


