import { create } from "zustand";

export const useMessageStore = create((set, get) => ({
  messages: [
    // {
    //   id: 1,
    //   ia: false,
    //   message: "explain quanto compunt in mspter",
    // },
    // {
    //   id: 2,
    //   ia: true,
    //   message:
    //     "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    // },
    // {
    //   id: 3,
    //   ia: false,
    //   message: "compunt in mspter",
    // },
    // {
    //   id: 4,
    //   ia: true,
    //   message:
    //     "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when antaining Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    // },
  ],
  error: null,
  sendPrompt: async ({ prompt }) => {
    const messageIAid = get().messages.length + 1;
    /* actualizar el estado de los mensajes
    con el mensaje del usuario y crear 
    un mensaje de la IA vacio
    mientras hacemos el fetching de datos */

    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: state.messages.length,
          ia: false,
          message: prompt,
        },
        {
          id: messageIAid,
          ia: true,
          message: "",
        },
      ],
    }));

    //fetching de datos

    try {
      const response = await fetch(`https://ai.kleber.digital/get-answer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: "729a6746-c480-4b26-b269-13b8acb509d2",
          prompt: `${prompt}`,
          external_user_id: "Sergiofff",
        }),
      });

      const json = await response.json();

      //actualizar el mensaje de la IA
      // que tenia vacio
      //con el texto completo

      set((state) => ({
        messages: state.messages.map((entry) => {
          if (entry.id === messageIAid) {
            return {
              ...entry,
              message: json.response,
            };
          }
          return entry;
        }),
      }));
    } catch (e) {
      console.error(e);
    }
  },
}));
