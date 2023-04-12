import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const messageStorePersistConfig = {
  name: "conversations",
  Storage: createJSONStorage(() => localStorage),
};

export const useMessageStore = create(
  persist(
    (set, get) => ({
      loading: false,
      messages: [
        {
          id: 78378,
          ia: false,
          message: "Hola",
        },
        {
          id: 37832,
          ia: true,
          message:
            "¡Hola! Hazme una pregunta acerca de KleberAI y te responderé lo mejor que pueda.",
        },
      ],
      error: null,
      embeddings: [],
      persistandID: uuidv4(),
      externalID: uuidv4(),
      clearHistory: () => {
        set(() => ({
          loading: false,
          messages: [],
          embeddings: [],
          externalID: null,
        }));
      },
      setLoading: () => {
        set((state) => {
          console.log("setLoading",state);
          return {
          
            ...state,
            loading: false,
          }
        });
      },
      sendPrompt: async ({ prompt, intention }) => {
        const messageIAid = get().messages.length + 1;
        let userID = get().externalID;
        const persistandID = get().persistandID;

        !userID ? (userID = uuidv4()) : userID;

        set((state) => ({
          loading: true,
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
          externalID: userID,
        }));

        try {
          const response = await fetch(`/api/chat`, {
            method: "POST",
            body: JSON.stringify({
              prompt: `${prompt}`,
              external_user_id: `web-${persistandID}-${userID}`,
              force_intention: `${intention}`,
            }),
          });

          const json = await response.json();

          set((state) => ({
            loading: false,
            messages: state.messages.map((entry) => {
              if (entry.id === messageIAid) {
                return {
                  ...entry,
                  message: json.response?.answer || json.response,
                };
              }
              return entry;
            }),
            embeddings: json.response?.embeddings,
          }));
        } catch (e) {
          console.error("error en messages", e);
        }
      },
    }),
    messageStorePersistConfig
  )
);
