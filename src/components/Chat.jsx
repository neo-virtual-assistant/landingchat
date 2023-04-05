import { useMessageStore } from "@/store/messages";
import { useEffect, useRef } from "react";
import { HiTrash } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { Box, Textarea, Text, Flex, Image, IconButton, Button } from "theme-ui";
import TypingEffect from "./TypingEffect";

function Message({ ia, message,scrollToBottom }) {
  const textElement = ia ? <TypingEffect text={message} scrollToBottom={scrollToBottom} /> : message;

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
      }}
    >
      {textElement}
    </Box>
  );
}

function ChatForm() {
  const sendPrompt = useMessageStore((state) => state.sendPrompt);
  const textAreaRef = useRef();

  const handleSubmit = () => {
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
              border: "light",
              borderColor: "borderColor",
              py: 2,
              px: 3,
              borderRadius: "regular",
            }}
          />
          <IconButton
            type="submit"
            sx={{
              position: "absolute",
              bottom: "0",
              right: "0",
              borderRadius: "full",
              aspectRatio: "1/1",
              p: "7px 7px 0px 6px",
              background: "primaryGradient",
            }}
          >
            <RiSendPlaneFill style={{ height: "22px", width: "100%" }} />
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
    messagesEndRef.current?.scrollIntoView(false, { behavior: "smooth" });
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
        height: ["auto", "700px"],
        borderRadius: "regular",
        justifyContent: "center",
        width: "370px",
      }}
    >
      <Flex
        sx={{ width: "100%", alignItems: "center", gap: "10px", ml: "20px" }}
      >
        <Image
          src="./img/botPhoto.png"
          alt="bot photo"
          sx={{
            borderRadius: "full",
            aspectRatio: "1/1",
            width: "30px",
            objectFit: "cover",
          }}
        />
        <Text sx={{ fontSize: [0, 1] }}>ServiceBot</Text>
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
            <Message key={entry.id + i} {...entry} scrollToBottom={scrollToBottom} />
          ))}
          <div ref={messagesEndRef} />
        </Flex>
        <ChatForm />
      </Flex>
      <Button
        onClick={() => clearHistory()}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: 1,
          borderColor: "secondary",
          p: "10px",
          width: "100%",
          minHeight: "55px",
          borderRadius: "light",
          gap: "10px",
          bg: "background",
          "&:hover": { bg: "backgroundChat" },
        }}
      >
        <Box
          sx={{
            color: "secondary",
            background: "primaryGradient",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            width: ["18px", "25px"],
            height: ["18px", "25px"],
          }}
        >
          <HiTrash style={{ width: "100%", height: "100%" }} />
        </Box>
        <Text
          sx={{
            background: "primaryGradient",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "semibold",
            fontSize: [0, 1],
          }}
        >
          Limpiar Historial
        </Text>
      </Button>
    </Flex>
  );
};

export default Chat;
