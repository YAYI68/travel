import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import Rating from "@material-ui/lab"
import useStyles from "./style"
import { mapStyles } from './mapStyles';


export const Map = ({setCoordinates,setBounds, coordinates,setChildClicked}) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('max-width:600px')
 
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
      bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={coordinates}
      center={coordinates} 
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={{disabledDefaultUI:true,zoomControl:true, styles:mapStyles }}
      onChange = {
        (e)=>{
          setCoordinates({lat:e.center.lat, lng:e.center.lng})
          setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})
        }
        }
      onChildClick = {
        (child)=>setChildClicked(child)
      } 
      >
      {places?.map((place)=>(
        <div 
         className={classes.makerContainer}
         lat={Number(place.latitude)}
         lng={Number(place.longitude)}
         key={i}
        >
        {isMobile ? (
          <LocationOnOutlined  color="primary" fontSize="large" />
        ):(
          <Paper elevation={3}  className={classes.paper}>
             <Typography className={classes.typography} variant="subtitle2" gutterBottom>
              {place.name}
             </Typography>
             <img 
             className={classes.pointer} 
              src={place.photo ? place.photo.image.large.url : ""}    
               alt={place.name} />
               <Rating size="small" value={Number(place.rating)}   readOnly  />
              </Paper>
        )
      }
        </div>
      ))}

      </GoogleMapReact>
    </div>
  ) 
}
