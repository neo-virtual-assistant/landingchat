import documentsLocal from "../mocks/saberMas.json";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "./Documents/Documents.module.css";
import { useState } from "react";
import { useMessageStore } from "@/store/messages";
import { Button, Flex, Heading, Text } from "theme-ui";
import { IoMdChatboxes } from "react-icons/io";

const DataOfEmbedding = ({ title, content, similarity, user_id }) => {
    console.log(title)
  const [isOpen, setIsOpen] = useState(false);
  const [idSubtitle, setIdSubtitle] = useState("");

  const handleClick = (v) => {
    setIdSubtitle(v);
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      sx={{ flexDirection: "column", gap: "20px", maxWidth: "350px" }}
    >
      <Button
        className={styles.dataWrapped}
        onClick={() => handleClick(user_id)}
        sx={{ bg:"background"}}
      >
        <div className={styles.dataSubtitle}>
          <BsThreeDotsVertical className={styles.iconDot} />
          <h2 className={styles.subTitles}>{title}</h2>
        </div>
      </Button>
      {isOpen && user_id == idSubtitle && (
        <div className={styles.dataUsedWrapped}>
          <p>{content}</p>
          <span>Similitud: {similarity}</span>
        </div>
      )}
    </Flex>
  );
};

const Documentss = () => {

  const embeddings = useMessageStore((state) => state.embeddings);

  console.log(embeddings)

  return (
    <Flex sx={{ gap: "40px", flexDirection: "column" }}>
      <Heading
        as="h1"
        sx={{
          fontSize: 6,
          background: "primaryGradient",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Documentos Usados
      </Heading>
      {embeddings.map((entry, i) => (
        <DataOfEmbedding key={i} {...entry} />
      ))}
      <Flex
        sx={{
          alignItems: "center",
          gap: "20px",
          background: "primaryGradient",
          color: "textSecondary",
          py: 3,
          px: 4,
          borderRadius: "full",
          maxWidth: "420px",
        }}
      >
        <IoMdChatboxes
          style={{ width: "30px", height: "auto", minWidth: "30px" }}
        />
        <Text sx={{ fontSize: 0, fontWeight: "bold" }}>
          Consulta a nuestro asistente virtual para más información sobre
          nuestra empresa.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Documentss;
