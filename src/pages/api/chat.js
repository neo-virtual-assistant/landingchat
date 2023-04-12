export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { prompt, external_user_id } = JSON.parse(req.body);

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    // let response;
    // response = await fetch(`https://ai.kleber.digital/get-answer`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     key: `${process.env.API_KEY}`,
    //     prompt: `${prompt}`,
    //     external_user_id: `${external_user_id}`,
    //     webhook: "https://n8n.kleber.digital/webhook/discord-kleberai",
    //   }),
    // });

    // if (response.status == 500) {
    //   return res.status(500).json({ response: "Error Interno del Servidor" });
    // }
    // if (response.status == 429) {
    //   return res.status(429).json({ response: "Demasiadas solicitudes" });
    // }

    // if (response.status !== 200) {
    //   throw new Error(`Request failed with status ${response.status}`);
    // }
    
    // if (response.status == 200) {
    //   const json = await response.json();
    //   return res.status(200).json({ response: json });
    // }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e });
  }
}
