
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

//TODO: RANDOM SELECT WORD FROM LIBRARY
const key_word = ['A','P','P','L','E'];


class InnerGrid extends Component {
 
    state = {
      chars : [
        '',
        '',
        '',
        '',
        ''
      ]
    }; 

  onChange = (new_char, index) => {
    if (index === -1) {
      // handle error
    } else {
      this.setState({
        chars: [
          ...this.state.chars.slice(0,index),
          new_char,
          ...this.state.chars.slice(index+1)
        ]
      }, () => console.log('status updated: ', this.status));
    }
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      
      //compare...
      
      //get characters from state into an array to loop through and compare each char to the correct word
      var guess_word = [...this.state.chars]

      // console.log(guess_word)
       for (let i = 0; i < guess_word.length; i++) {
          //TODO: WHEN USER ENTERS LOWERCASE, IT'S DISPLAYED UPPERCASE BUT STORED AS LOWERCASE THEREFORE INCORRECT
          //TODO: IMPLEMENT FOR GREEK CHARACTERS
          
          if (guess_word[i] === key_word[i]){
            console.log('CORRECT', guess_word[i])
            //TODO: Mark tile green
          }else if (key_word.includes(guess_word[i])){
            console.log('CORRECT WRONG SPOT', guess_word[i])
            //TODO: Mark tile yellow
          }else {
            console.log('INCORRECT', guess_word[i])
            //TODO: Mark tile grey
          }

      } 
    }
  }

  render() {
      return(
      <Grid container >
        {this.state.chars.map(( char, index ) => {
          return (
            <TextField  key={index} onChange={(e) => this.onChange(e.target.value, index)}
            inputProps={{ 
              maxLength: 1 , 
              style: { textTransform: "uppercase" } }}
              onKeyPress= {this.onKeyPress}></TextField>
          )

        })}
      </Grid>
    );
    }
}

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


{/* <Grid container >
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
</Grid> */}