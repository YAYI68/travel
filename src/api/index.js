import axios from "axios";




export const getPlaces = async(type,sw,ne)=>{
    try{
      const  options = {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_KEY,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };
     const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,options)
     return data   

    }
    catch(e){
        console.error(e);

    }
}