import React, {useState} from 'react'
import {Autocomplete} from "@react-google-maps/api"
import { AppBar,Toolbar,Typography, InputBase,Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import useStyles from  "./style"

export const Header = ({setCoordinates}) => {
   const classes = useStyles()
   const [autoComplete,setAutocomplete] = useState();


   const onload = (autoC)=>setAutocomplete(autoC)

   const onPlaceChanged = ()=>{
    const lat = autoComplete.getPlaces().geometry.location.lat();
    const lng = autoComplete.getPlaces().geometry.location.lng();

    setCoordinates({lat,lng});
   }
 

  return (
    <AppBar>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h5" className={classes.title}>
                 Travel Advisor
            </Typography>
            <Box display='flex'>
                <Typography variant="h6" className={classes.title}>
                    Explore new places
                </Typography>
                <Autocomplete  onLoad={onload} onPlaceChanged={onPlaceChanged}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Search....' classes={{root:classes.inputRoot, input:classes.inputInput}}   />
                    </div>
                </Autocomplete>

            </Box>

        </Toolbar>
    </AppBar>
  )
}
