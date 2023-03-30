import { useMessageStore } from "@/store/messages";
import { useEffect, useRef } from "react";
import { HiArrowCircleDown } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import TypingEffect from "../TypingEffect/TypingEffect";
import styles from "./Chat.module.css";

function Message({ ia, message }) {

  const textElement = ia ? <TypingEffect text={message} /> : message;
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  return (
    <div>
      <div
        className={`${styles.promptWrapped} ${
          ia ? styles.answer : styles.prompt
        }`}
      >
        <div>{textElement}</div>
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

function ChatForm() {
  const sendPrompt = useMessageStore((state) => state.sendPrompt);
  const textAreaRef = useRef();

  const handleSubmit = () => {
    const { value } = textAreaRef.current;
    console.log(value);
    sendPrompt({ prompt: value });
    textAreaRef.current.value = "";
  };

  const handleChange = () => {
    const el = textAreaRef.current;
    const scrollHeight = el.scrollHeight;
    el.style.height = scrollHeight + "px";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section className={styles.ChatbotForm}>
      <form
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        className={styles.inputWrapped}
      >
        <div>
          <textarea
            onChange={handleChange}
            ref={textAreaRef}
            rows={1}
            tabIndex={0}
            autoFocus
            defaultValue=""
            className={styles.inputChatbot}
            placeholder="Aa"
          />
          <button className={styles.send} type="submit">
            <RiSendPlaneFill className={styles.iconSend} />
          </button>
        </div>
      </form>
    </section>
  );
}

const Chat = () => {
  const messages = useMessageStore((state) => state.messages);

  return (
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
        <div className={styles.messagesContainer}>
          {messages.map((entry) => (
            <Message key={entry.id} {...entry} />
          ))}
        </div>
        <ChatForm />
      </div>
      <button className={styles.usedDocumentsWrapped}>
        <p>Documentos usados</p>
        <HiArrowCircleDown />
      </button>
    </div>
  );
};

export default Chat;
