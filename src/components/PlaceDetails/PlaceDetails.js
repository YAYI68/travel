import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core"
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/icons/PhoneIcon';
import Rating from '@material-ui/icons/Rating'; 

export const PlaceDetails = ({place}) => {
  console.log(place)
  return (
  <Card elevation={6}>
    <CardMedia 
       style={{height:350}}
       image={place.Photo? place.Photo.images.large.url : ""}
       title = {place.name}
    />
    <CardContent>
         <Typography gutterBottom variant="h5">{place.name}</Typography>
         <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">{place?.price}</Typography>
         </Box>
         <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">{place?.ranking}</Typography>
         </Box>
         {place?.awards?.map((award) =>(
             <Box my={1}  display="flex" justifyContent="space-between">
             <img src={award.image.small} alt={award.display_name} />
             <Typography gutterBottom variant="subtitle2" color="textSecondary">{place?.display_name}</Typography>
            </Box>
         ))}
         {place?.cuisine?.map(({name})=>(
          <Chip key={name} size="small" label={name} className="" />
         ))}
         {place?.address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle1}>
              <LocationOnIcon  />{place?.address}
             </Typography>
         )}
         {place?.phone && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
              <PhoneIcon  />{place?.phone}
             </Typography>
         )}
    </CardContent>

  </Card>
  )
}
