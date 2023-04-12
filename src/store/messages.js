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
            "¡Hola! ¿En qué puedo ayudarte hoy en relación a tu negocio y tu rubro?",
        },
      ],
      error: null,
      embeddings: [
        {
          similarity: 0.8316118423363105,
          title: "¿Para qué negocio es bueno?",
          content:
            "Es bueno para cualquier negocio que maneje mucha información",
        },
        {
          similarity: 0.8205902008550866,
          title: "Puedo ser un socio tuyo?",
          content:
            "Para asociaciones, alianza, marca blanca, etc de momento no estamos interesados, sin embargo si adquieres el servicio podemos estar abiertos a empezar negociaciones, ya que al comprar nuestro servicio nos demuestra más confianza de que la alianza es en serio y tendrá éxito",
        },
        {
          similarity: 0.8143857201904302,
          title: "Negocio educación",
          content:
            "para escuelas y universidad o plataformas online de educación Kleber AI ofrece un servicio para sus estudiantes para que puedan consultar información que enseñan y de su centro educativo",
        },
        {
          similarity: 0.8137208983627641,
          title: "Negocio de servicios",
          content:
            "Kleber AI ofrece buena ayuda a empresas que ofrecen servicios, pues estos suelen tener mucha información que los usuarios necesitan preguntar, Kleber AI es excelente respondiendo con información verídica a los usuarios",
        },
        {
          similarity: 0.8027139806265804,
          title: "Funciona con productos? ",
          content:
            "Kleber AI Si te ayuda para dar información de productos, de hecho con productos es una de las cosas más óptimas, incluso es posible hacer cotizaciones y pedidos para ciertos negocios, el usuario podrá preguntar en lenguaje natural sobre un producto y la AI le dará una respuesta buena, incluso será capaz de recomendar productos o compararlos.",
        },
      ],
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
