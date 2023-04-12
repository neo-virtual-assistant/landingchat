import { useMessageStore } from "@/store/messages";
import { useEffect, useRef, useState } from "react";
import { HiTrash } from "react-icons/hi";
import { Box, Textarea, Text, Flex, Image, IconButton, Button } from "theme-ui";
import TypingEffect from "./TypingEffect";
import { RiSendPlaneFill } from "react-icons/ri";

const loadingStates = [
  [true, false, false],
  [true, true, false],
  [true, true, true],
];

function LoadingButton() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        return newIndex > 2 ? 0 : newIndex;
      });
    }, 400);

    return () => clearInterval(intervalId);
  }, []);

  const [, showSecond, showThird] = loadingStates[index];

  return (
    <Box sx={{ fontSize: [1] }}>
      <Text>·</Text>
      <Text sx={{ visibility: !showSecond && "hidden" }}>·</Text>
      <Text sx={{ visibility: !showThird && "hidden" }}>·</Text>
    </Box>
  );
}

function Message({ ia, message, scrollToBottom }) {
  const textElement = ia ? (
    <TypingEffect text={message} scrollToBottom={scrollToBottom} />
  ) : (
    message
  );

  return (
    <Box
      sx={{
        borderRadius: "light",
        px: 3,
        py: 2,
        display: "table",
        fontSize: [0, 1],
        background: ia ? "backgroundChat" : "primaryGradient",
        color: ia ? "" : "textSecondary",
        marginRight: ia ? "auto" : "",
        marginLeft: ia ? "" : "auto",
        maxWidth: ["180px", "200px", "240px"],
        whiteSpace: "pre-line",
      }}
    >
      {textElement}
    </Box>
  );
}

function ChatForm() {
  const sendPrompt = useMessageStore((state) => state.sendPrompt);
  const isLoading = useMessageStore((state) => state.loading);
  const textAreaRef = useRef();

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (textAreaRef.current.value == "") return;
    if (isLoading) return;

    const { value } = textAreaRef.current;
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
    <Flex
      as="section"
      sx={{
        flexDirection: "column",
        gap: "20px",
        height: "auto",
      }}
    >
      <Box
        as="form"
        disabled={isLoading}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        sx={{ position: "relative" }}
      >
        <Box>
          <Textarea
            onChange={handleChange}
            ref={textAreaRef}
            rows={1}
            tabIndex={0}
            autoFocus
            defaultValue=""
            placeholder="Envia un mensaje"
            sx={{
              borderColor: "backgroundChat",
              borderRadius: "light",
              height: "auto",
              py: 2,
              px: 3,
              borderRadius: "regular",
              outline: "none",
              transition: "border-color 0.3s ease",
              "&:focus": {
                borderColor: "primary",
              },
              overflow: "hidden",
            }}
          />
          <IconButton
            type="submit"
            disabled={isLoading}
            sx={{
              position: "absolute",
              bottom: "2px",
              right: "2px",
              height: "27px",
              width: "27px",
              borderRadius: "full",
              aspectRatio: "1/1",
              p: "3px 7px 0px 6px",
              background: isLoading ? "background" : "primaryGradient",
              pointerEvents: isLoading ? "none" : "auto",
            }}
          >
            {isLoading ? (
              <LoadingButton />
            ) : (
              <RiSendPlaneFill style={{ height: "18px", width: "100%" }} />
            )}
          </IconButton>
        </Box>
      </Box>
    </Flex>
  );
}

const Chat = () => {
  const messages = useMessageStore((state) => state.messages);
  const clearHistory = useMessageStore((state) => state.clearHistory);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    const { offsetHeight, scrollHeight, scrollTop } = messagesEndRef.current;
    // if (scrollHeight <= scrollTop + offsetHeight + 100) {
      messagesEndRef.current?.scrollTo(0, scrollHeight);
    // }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Flex
      as="aside"
      sx={{
        flexDirection: "column",
        maxWidth: "370px",
        border: 2,
        borderColor: "borderColor",
        gap: ["10px", "20px"],
        p: ["10px", "25px"],
        height: ["auto", "630px"],
        borderRadius: "regular",
        justifyContent: "center",
        width: "370px",
      }}
    >
      <Flex sx={{ justifyContent: "space-between", px: "10px" }}>
        <Flex sx={{ alignItems: "center", gap: "10px" }}>
          <Image
            src="./img/logo.svg"
            alt="bot photo"
            sx={{
              borderRadius: "full",
              aspectRatio: "1/1",
              width: "30px",
              objectFit: "cover",
            }}
          />
          <Text sx={{ fontSize: [0, 1] }}>Kleber IA</Text>
        </Flex>
        <IconButton
          onClick={() => clearHistory()}
          sx={{
            p: 1,
            color: "secondary",
            width: ["30px", "35px"],
            height: ["30px", "35px"],
            aspectRatio: "1/1",
            "&:hover": {
              bg: "backgroundChat",
              borderRadius: "full",
              aspectRatio: "1/1",
            },
          }}
        >
          <HiTrash style={{ width: "100%", height: "100%" }} />
        </IconButton>
      </Flex>
      <hr style={{ border: "1px solid #3f3f46" }} />
      <Flex
        sx={{
          flexDirection: "column",
          gap: "20px",
          height: "500px",
          width: "100%",
        }}
      >
        <Flex
          ref={messagesEndRef}
          sx={{
            flexDirection: "column",
            gap: "10px",
            overflowY: "auto",
            height: "90%",
            width: "100%",
            pr: "5px",
          }}
        >
          {messages.map((entry, i) => (
            <Message
              key={entry.id + i}
              {...entry}
              scrollToBottom={scrollToBottom}
            />
          ))}
        </Flex>
        <ChatForm />
      </Flex>
    </Flex>
  );
};

export default Chat;
