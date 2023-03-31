import { create } from "zustand";

export const useMessageStore = create((set, get) => ({
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
    {
      id: 37833,
      ia: false,
      message: "Me gustaría saber mas sobre esta empresa",
    },
    {
      id: 378374,
      ia: true,
      message:
        "Por supuesto, Kleber AI es una empresa de inteligencia artificial que ofrece servicios para ayudar a las empresas a manejar y procesar grandes cantidades de información. Su servicio principal es un chatbot que utiliza tecnología NLP para procesar y responder preguntas en lenguaje natural de los usuarios. Este chatbot puede ser implementado en cualquier negocio que maneje mucha información y desee mejorar la atención al cliente y la eficiencia operativa. Además, Kleber AI ofrece soluciones personalizadas para adaptarse a las necesidades específicas de cada empresa.",
    },
  ],
  error: null,
  embeddings: [
    {
      similarity: 0.8316118423363105,
      title: "¿Para qué negocio es bueno?",
      content: "Es bueno para cualquier negocio que maneje mucha información",
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
  sendPrompt: async ({ prompt }) => {
    const messageIAid = get().messages.length + 1;
    const documentID = get().messages.length + 5;
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
      console.log("prompt messages", prompt);
      const response = await fetch(`/api/chat`, {
        method: "POST",
        body: JSON.stringify({
          prompt: `${prompt}`,
          external_user_id: "lastChatSergiohhh",
        }),
      });

      console.log("response messages", response);

      const json = await response.json();

      console.log("json messages", json);

      // actualizar el mensaje de la IA
      // que tenia vacio
      // con el texto completo

      set((state) => ({
        messages: state.messages.map((entry) => {
          if (entry.id === messageIAid) {
            return {
              ...entry,
              message: json.response.answer,
            };
          }
          return entry;
        }),
        embeddings: json.response.embeddings
      }));

    
    } catch (e) {
      console.error("error en messages", e);
    }
  },
}));
