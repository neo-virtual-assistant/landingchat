export default async function handler(req, res) {

  if (req.method !== "POST") return res.status(405).end();

  const { prompt } = JSON.parse(req.body);

  console.log("req.body chat", req.body)
  console.log("prompt chat", prompt)

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await fetch(`https://ai.kleber.digital/get-answer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: `${process.env.API_KEY}`,
        prompt: `${prompt}`,
        external_user_id: "lastChatSergiiooo",
      }),
    });

    console.log("response chat", response)

    if (!response.ok) {
      console.error(response.statusText);
      return res.status(500).json({ error: "AI api error" });
    }

    const json = await response.json();
    console.log("json chat",json)
    return res.status(200).json({ response: json });
    
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e });
  }
}
