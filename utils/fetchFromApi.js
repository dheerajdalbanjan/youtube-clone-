import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/'

const options = {
  params:{
    maxResults: 100,
    regionCode: 'IN',
  }, 
  headers: {
    'X-RapidAPI-Key': 'a4235f4f7bmshac0aa76fbe54343p1d8101jsn42f45ea6227b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export default async function fetchFromApi(url){
    console.log(url)
    const {data} = await axios.get(`${BASE_URL}${url}`, options)
    return data
}