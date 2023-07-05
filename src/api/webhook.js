const fetch = require("node-fetch");
// Imports the dialogflow-fulfillment library
const { WebhookClient } = require("dialogflow-fulfillment");
const {Card, Suggestion} = require('dialogflow-fulfillment');

const translate = require("./translator.js");

const executeQueries = require("./detectIntent.js");

const gpt = require("./gptModel.js");

const tiktok = require("./tiktok.js");

// projectId: ID of the GCP project where Dialogflow agent is deployed
const projectId = process.env.GOOGLE_PROJECT_ID;
// languageCode: Indicates the language Dialogflow agent should use to detect intents
const languageCode = process.env.DF_LANGUAGE_CODE;


module.exports = async function webhook(req, res) {
    
  const agent = new WebhookClient({ request: req, response: res });

  // sessionId: String representing a random number or hashed user identifier
  const session = req.body.session.split("/");
  const sessionId = session[session.length - 1];
  
  async function fallback(agent) {
    const response = await gpt(agent.query);
    console.log(response)
    agent.add(response);
  }
  
  async function TikTokVideos(agent) {
    const response = await tiktok();
    console.log("Yeah, check this video " + response)
    agent.add("Yeah, check this video " + response);
    
  }

  async function translateExpression(agent) {
    const response = await translate(agent.parameters.expression);
    agent.add('Yeah, is "' + response.query + '"'); 
  }

  async function translateSpanish(agent) {
    // queries: A set of sequential queries to be send to Dialogflow agent for Intent Detection
    const responseT = await translate(agent.parameters.input);
    const queries = [responseT.query];

    const response = await executeQueries(
      projectId,
      sessionId,
      queries,
      languageCode
    );

    agent.add(response);
  }

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set("Default Fallback Intent", fallback);
  intentMap.set("translate.español", translateSpanish);
  intentMap.set("translate.expression", translateExpression);
  intentMap.set("video.tiktok", TikTokVideos);
  agent.handleRequest(intentMap);
}