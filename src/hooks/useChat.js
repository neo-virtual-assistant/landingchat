import { sendPrompt } from "@/service/ChatAI";
import { useRef, useState } from "react";

export function useChat({ prompt }) {
  console.log("useChat", prompt);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAnswer = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("getAnswer", prompt);
      const newMessage = await sendPrompt({ prompt });
      console.log("newMessage", newMessage);
      setMessages(newMessage);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { messages, getAnswer, loading, message, setMessage };
}
