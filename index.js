const axios = require("axios");

const getTranscriptSummary = async () => {
  // Add your new transcript here
  const podcastTranscript = "";

  // Add your API key in the variable below
  const apiKey = "";
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  const prompt = `Write a summary for my podcast using the podcast transcript below:
  
    ${podcastTranscript}
    `;

  const body = {
    model: "gpt-4-1106-preview",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  };

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      body,
      { headers }
    );

    if (response.status !== 200) {
      console.log(response.status);
    }

    const responseContent = response.data.choices[0].message.content.trim();
    console.log(responseContent);
  } catch (error) {
    console.log(error);
  }
};

getTranscriptSummary();
