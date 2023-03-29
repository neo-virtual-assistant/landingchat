import styles from "./Chatbot.module.css";
import chatLocal from "../../mocks/hola.json";
import saberMas from "../../mocks/saberMas.json";
import { useEffect, useRef } from "react";

function ListOfChat({ messages, loading }) {
  console.log("List of chat", messages);
  console.log("List", messages[0]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.messagesContainer}>
      {messages.slice(1).map((message, i) => (
        <div key={i}>
          <div
            className={`${styles.promptWrapped} ${
              message.role === "user" ? styles.prompt : styles.answer
            }`}
          >
            {loading ? <p>cargando</p> : <div>{message.content}</div>}
            <div ref={messagesEndRef} />
          </div>
        </div>
      ))}
    </div>
  );
}

function NoChatResult() {
  const a = false;
  const b = true;
  return (
    <div className={styles.messagesContainer}>
      <div
        className={`${styles.promptWrapped} ${
          b ? styles.prompt : styles.answer
        }`}
      >
        <div>✋¡hola!</div>
      </div>
      <div
        className={`${styles.promptWrapped} ${
          a ? styles.prompt : styles.answer
        }`}
      >
        <div>{chatLocal.answer}</div>
      </div>
      <div
        className={`${styles.promptWrapped} ${
          b ? styles.prompt : styles.answer
        }`}
      >
        <div>Me gustaría saber mas sobre esta empresa</div>
      </div>
      <div
        className={`${styles.promptWrapped} ${
          a ? styles.prompt : styles.answer
        }`}
      >
        <div>{saberMas.answer}</div>
      </div>
    </div>
  );
}

export function Chatbot({ messages, loading }) {
  const hasMessages = Object.keys(messages || "")?.length > 0;
  return hasMessages ? (
    <ListOfChat messages={messages} loading={loading} />
  ) : (
    <NoChatResult />
  );
}
