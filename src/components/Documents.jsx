import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { useMessageStore } from "@/store/messages";
import { Box, Button, Flex, Heading, Text } from "theme-ui";
import { IoMdChatboxes } from "react-icons/io";

const DataOfEmbedding = ({ title, content, similarity, user_id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [idSubtitle, setIdSubtitle] = useState("");

  const handleClick = (v) => {
    setIdSubtitle(v);
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      sx={{
        flexDirection: "column",
        gap: ["10px","10px","10px","20px"],
        minWidth: "300px"
      }}
    >
      <Button
        onClick={() => handleClick(user_id)}
        sx={{
          display: "flex",
          borderRadius: "full",
          bg: ["backgroundChat", "backgroundChat", "backgroundChat","background"],
          p:"10px 15px",
          "&:hover": { bg: "backgroundChat", borderRadius: "full" },
          gap: "10px",
          alignItems: "flex-start",
          width: "auto",
        }}
      >
        <BsThreeDotsVertical
          style={{ height: "20px", width: "20px", minWidth: "20px" }}
        />
        <Heading
          as="h2"
          sx={{
            fontSize: [0, 1, 2, 2],
            display: "flex",
            textAlign: "left",
            lineHeight: "20px",
          }}
        >
          {title}
        </Heading>
      </Button>
      {isOpen && user_id == idSubtitle && (
        <Flex sx={{ flexDirection: "column", fontSize: 1, gap: "20px", p:"0px 20px"}}>
          <Text as="p">{content}</Text>
          <Text
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              fontWeight: "semibold",
            }}
          >
            Similitud: {similarity}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

const Documents = () => {
  const embeddings = useMessageStore((state) => state.embeddings);

  return (
    <Flex sx={{ gap: "40px", flexDirection: "column" }}>
      <Heading
        as="h1"
        sx={{
          fontSize: [4, 5, 6, 6],
          background: "primaryGradient",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Documentos Usados
      </Heading>
      <Flex
        sx={{
          flexDirection: ["row", null, null, "column"],
          gap: ["10px","10px","20px"],
          height: "auto",
          width: "100%",
          overflowX: ["auto", null, "none", "none"],
          p:"10px"
        }}
      >
        {embeddings.map((entry) => (
          <DataOfEmbedding
            key={entry.similarity + entry.content.length}
            {...entry}
          />
        ))}
      </Flex>
      <Flex
        sx={{
          alignItems: "center",
          gap: "20px",
          background: "primaryGradient",
          color: "textSecondary",
          py: [2, 3],
          px: [3, 4],
          borderRadius: "full",
          maxWidth: "420px",
        }}
      >
        <IoMdChatboxes
          style={{ width: "30px", height: "auto", minWidth: "30px" }}
        />
        <Text sx={{ fontSize: ["11px", 0], fontWeight: "bold" }}>
          Consulta a nuestro asistente virtual para más información sobre
          nuestra empresa.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Documents;
