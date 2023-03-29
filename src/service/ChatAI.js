const API_KEY = "729a6746-c480-4b26-b269-13b8acb509d2";

export const sendPrompt = async ({ prompt }) => {
  if (prompt === "") return null;

  try {
    const data = {
      key: `${API_KEY}`,
      prompt: `${prompt}`,
      external_user_id: "Sergiofff",
    };

    const res = await fetch(`https://ai.kleber.digital/get-answer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    const formatedData = json.messages;
    console.log(formatedData)
    console.log("json", json);

    return formatedData?.map(data => ({
      role: data.role,
      content: data.content
    }))
  } catch (e) {
    throw new Error("Error to send prompt");
  }
};
