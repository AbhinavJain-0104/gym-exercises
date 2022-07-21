
export const exerciseOptions = {
    method: 'GET',
       headers: {
      'X-RapidAPI-Key': '3371b1455bmsh278084a13dc6dbep1a153djsn5429cfc03dc7',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData=async(url,options) =>{
    const response=await fetch(url,options);
    const data=await response.json();  

    return data;
}


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3371b1455bmsh278084a13dc6dbep1a153djsn5429cfc03dc7',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};



// export const fetchData = async (url, options) => {
//   const res = await fetch(url, options);
//   const data = await res.json();

//   return data;
// };

