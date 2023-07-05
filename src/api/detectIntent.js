const fetch = require("node-fetch");
// Imports the Dialogflow library
const dialogflow = require("@google-cloud/dialogflow");

// projectId: ID of the GCP project where Dialogflow agent is deployed
const projectId = process.env.GOOGLE_PROJECT_ID;
// languageCode: Indicates the language Dialogflow agent should use to detect intents
const languageCode = process.env.DF_LANGUAGE_CODE;
// key: Path of Google Application Credentials file
const key = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// Instantiates a session client
const sessionClient = new dialogflow.SessionsClient({ keyFilename: key });

async function detectIntent(
  projectId,
  sessionId,
  query,
  contexts,
  languageCode
) {
  // The path to identify the agent that owns the created intent.
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };

  if (contexts && contexts.length > 0) {
    request.queryParams = {
      contexts: contexts,
    };
  }

  const responses = await sessionClient.detectIntent(request);
  return responses[0];
}

module.exports = async function executeQueries(
  projectId,
  sessionId,
  queries,
  languageCode
) {
  // Keeping the context across queries let's us simulate an ongoing conversation with the bot
  let context;
  let intentResponse;
  //for (const query of queries) {
  try {
    console.log(`Sending Query: ${queries[0]}`);
    intentResponse = await detectIntent(
      projectId,
      sessionId,
      queries[0],
      context,
      languageCode
    );
    console.log(
      `Fulfillment Text: ${intentResponse.queryResult.fulfillmentMessages}`
    );
    // Use the context from this response for next queries
    context = intentResponse.queryResult.outputContexts;
    // Send this response to agent
    return intentResponse.queryResult.fulfillmentText;
  } catch (error) {
    console.log(error);
  }
  //}
};
