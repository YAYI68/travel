import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';




export const getPlaces = async(sw,ne)=>{
    try{
      const  options = {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key': 'e6e424d117msh949f3e2a01d5db5p1344d0jsnc0427ea381db',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };
     const {data:{data}} = await axios.get(URL,options)
     return data   

    }
    catch(e){
        console.error(e);

    }
}