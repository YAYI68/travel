import { Grid, InputLabel, MenuItem, CircularProgress,Typography,FormControl,Select} from '@material-ui/core';
import React,{useState} from 'react';
import {PlaceDetails } from "../PlaceDetails/PlaceDetails"

import useStyles from "./style"

export const List = ({places}) => {
  const classes = useStyles();
  const [type,setType] = useState('restaurant');
  const [rating,setRating] = useState('restaurant');
  
  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurant, Hotels & Attractions around you </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select onChange={(e)=>setType(e.target.value)} value={type}>
            <MenuItem value="restaurant">Restaurant</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select onChange={(e)=>setRating(e.target.value)} value={rating}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>  
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place,i)=>(
        <Grid item xs={12} key={i}>
         <PlaceDetails place={place} />
        </Grid>
        ))}
      </Grid>

    </div>
  )
}
