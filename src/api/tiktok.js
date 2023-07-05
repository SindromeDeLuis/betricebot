const fetch = require("node-fetch");

module.exports = async function getTrendingVideos() {
  const url = 'https://tiktok-all-in-one.p.rapidapi.com/feed?region=US&device_id=7523368224928586621';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.aweme_list[0].share_url.split('?')[0]
  } catch (error) {
    console.error(error);
  }
}
