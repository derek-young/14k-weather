import fetch from "node-fetch";

const BACKEND = "http://34.229.135.129:4000";

const handler = async (event) => {
  try {
    if (event.path === "/.netlify/functions/graphql") {
      if (event.httpMethod === "POST") {
        console.log("event.body", event.body);
        const response = await fetch(BACKEND, {
          method: "post",
          body: event.body,
          headers: { "Content-Type": "application/json" },
        });
        console.log("response", response);
        const body = await response.json();
        console.log("body", body);

        return {
          body,
          statusCode: 200,
        };
      }

      throw new Error("Unknown request");
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
