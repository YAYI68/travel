import React,{useState,useEffect} from 'react'
import { CssBaseline,Grid } from "@material-ui/core"
import { Header } from './components/Header/Header'
import { List } from './components/List/List'
import { Map } from './components/Map/Map'
import { getPlaces } from './api'




const App = () => {
  const [places,setPlaces] = useState();
  const [coordinates,setCoordinates] = useState();
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null)
  const [type,setType] = useState('restaurant');
  const [rating,setRating] = useState('');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude})
    }) 
  },[])

  useEffect(() => {
    (async ()=>{
      const data = await getPlaces(type,bounds.sw,bounds.ne)
      setPlaces(data)
      console.log(data)
    })()

  }, [bounds,coordinates,type])
  

  return (
    <>
        <CssBaseline />
        <Header/>
        <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
            <List 
            places={places}
            childClicked={childClicked}
            setType={setType}
            rating={rating}
            setRating={setRating}
            type={type}
            />
        </Grid>  
        <Grid item xs={12} md={4}>
            <Map  
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
              setChildClicked={setChildClicked}
            />
        </Grid>
        </Grid>
    </>
  )
}

export default App