const fetch = require("node-fetch");

module.exports = async function translate(text, inp = "es", out = "en") {
  let translateAPI = `https://api.mymemory.translated.net/get?q=${text}&langpair=${inp}|${out}`;
  try {
    let response = await fetch(translateAPI);
    let data = await response.json();
    return { query: data.responseData.translatedText };
  } catch (error) {
    console.log(error);
  }
}