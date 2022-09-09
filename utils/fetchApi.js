import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': 'e323e24c8bmsh515eaf84e6cf11cp1b92d1jsnd8d68a6b9a38',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}