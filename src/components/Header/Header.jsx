import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { IoMdChatboxes } from "react-icons/io";
import { Documents } from "../Documents/Documents";
import { Chatbot } from "../Chatbot/Chatbot";
import { HiArrowCircleDown } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { useChat } from "@/hooks/useChat";
import Chat from "../Chat/Chat";

const Header = () => {
  const [prompt, setPrompt] = useState("");
  const { messages, getAnswer, loading, message, setMessage } = useChat({
    prompt,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { prompt } = Object.fromEntries(new window.FormData(e.target));
    setPrompt(prompt);
    console.log("prompt", prompt);
    setMessage("");
  };

  useEffect(() => {
    getAnswer();
  }, [prompt]);

  return (
    <section className={styles.headerContainer}>
      <div className={styles.documentsContainer}>
        <h1 className={styles.mainTitle}>Documentos Usados</h1>
        <Documents />
        <div className={styles.infoWrapped}>
          <IoMdChatboxes className={styles.iconInfo} />
          <p>
            Consulta a nuestro asistente virtual para mas informacion sobre
            nuestra empresa.
          </p>
        </div>
      </div>

      <div className={styles.chatbotContainer}>
        <div className={styles.nameChatbotWrapped}>
          <img
            src="./img/botPhoto.png"
            alt="bot photo"
            className={styles.imgWrapped}
          />
          <p>ServiceBot</p>
        </div>
        <hr></hr>
        <div className={styles.ChatbotForm}>
          <Chatbot messages={messages} loading={loading} />
          <form className={styles.inputWrapped} onSubmit={handleSubmit}>
            <input
              className={styles.inputChatbot}
              type="text"
              placeholder="Aa"
              name="prompt"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className={styles.send} type="submit">
              <RiSendPlaneFill className={styles.iconSend} />
            </button>
          </form>
        </div>
        <button className={styles.usedDocumentsWrapped}>
          <p>Documentos usados</p>
          <HiArrowCircleDown />
        </button>
      </div>

      <div>
        <Chat />
      </div>
    </section>
  );
};

export default Header;
