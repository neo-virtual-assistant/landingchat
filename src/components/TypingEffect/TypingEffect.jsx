import styles from "./TypingEffect.module.css";
import { useEffect, useRef, useState } from "react";

const useTypingEffect = ({text}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const messagesEndRe = useRef(null);
  const scrollToBottom = () => {
    messagesEndRe.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!text?.length) return;

    const randomTime = Math.floor(Math.random() * 40) + 15;

    const intervalId = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(intervalId);
        setShowCursor(false);
        return;
      }

      const nextIndex = text.indexOf(" ", currentIndex + 1);
      if (nextIndex < 0) {
        setDisplayText(text);
        setCurrentIndex(text.length);
        return;
      }

      setDisplayText(text.slice(0, nextIndex));
      setCurrentIndex(currentIndex + 1);
    }, randomTime);

    
    console.log("se ejecutó")
    scrollToBottom ();
    return () => {
      clearInterval(intervalId);
    };
  }, [text, currentIndex]);

  useEffect(() => {
    
    scrollToBottom ();
    console.log("se ejecutó")
  }, [currentIndex])
  

  return { displayText, showCursor };
};

const TypingEffect = ({ text }) => {
  const { displayText, showCursor, messagesEndRe } = useTypingEffect({text});

  return (
    <span className={`${showCursor ? styles.showCursor : ""}`} ref={messagesEndRe}>
      {displayText}
    </span>
  );
};

export default TypingEffect;
