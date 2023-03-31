import { useMessageStore } from "@/store/messages";
import { useEffect, useRef } from "react";
import { HiArrowCircleDown } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { Box, Textarea, Button, Text, Flex, Image } from "theme-ui";
import TypingEffect from "./TypingEffect/TypingEffect";

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
    <Box
      sx={{
        borderRadius: "light",
        px: 3,
        py: 2,
        display: "table",
        fontSize: 1,
        background: ia ? "backgroundChat" : "primaryGradient",
        color: ia ? "" : "textSecondary",
        marginRight: ia ? "auto" : "",
        marginLeft: ia ? "" : "auto",
        maxWidth: "240px",
      }}
    >
      <div>{textElement}</div>
      <div ref={messagesEndRef} />
    </Box>
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
            placeholder="Aa"
            sx={{
              border: "light",
              borderColor: "borderColor",
              py: 2,
              px: 3,
              borderRadius: "regular",
            }}
          />
          <Button
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
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

const Chatt = () => {
  const messages = useMessageStore((state) => state.messages);

  return (
    <Flex
      as="aside"
      sx={{
        flexDirection: "column",
        maxWidth: "370px",
        border: 2,
        borderColor: "borderColor",
        gap: "20px",
        p: "25px",
        height: "700px",
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
        <Text>ServiceBot</Text>
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
            pr:"5px"
          }}
        >
          {messages.map((entry) => (
            <Message key={entry.id} {...entry} />
          ))}
        </Flex>
        <ChatForm />
      </Flex>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-around",
          border: 1,
          borderColor: "secondary",
          p: "10px",
          width: "100%",
          minHeight: "55px",
          borderRadius: "light",
        }}
      >
        <Text
          sx={{
            background: "primaryGradient",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Documentos usados
        </Text>
        <Box
          sx={{
            color: "secondary",
            background: "primaryGradient",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <HiArrowCircleDown style={{ width: "28px", height: "28px" }} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Chatt;
