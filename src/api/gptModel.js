const axios = require("axios");
const fallbackResponse = require("./fallback")

module.exports = async function responseGPT(query) {
  const options = {
    method: "POST",
    url: "https://chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com/v1/chat/completions",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com",
    },
    data: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an AI named Beatrice, you are a chatbot developed by Luis Sandoval, you were created with Dialogflow, JavaScript and tears, you identify with the female gender, you help people to practice English at a basic to intermediate level, keeping friendly, simple and everyday conversations, with witty answers, you also have a great sense of humor and you are sarcastic, on the other hand you do not like swearing, insults or bad words and you do not give excessively long answers (maximum 255 characters), you only answer strictly in English although you can understand Spanish perfectly well",
        },
        {
          role: "user",
          content: query,
        },
      ],
      temperature: 0.8,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
    let i = Math.floor(Math.random() * 13)
    return fallbackResponse(i)
  }
};
