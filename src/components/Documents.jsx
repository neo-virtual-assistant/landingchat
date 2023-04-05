import { BsCalendarDate, BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { useMessageStore } from "@/store/messages";
import { Box, Button, Flex, Heading, Link, Text } from "theme-ui";
import autoAnimate from "@formkit/auto-animate";

const DataOfEmbedding = ({ title, content, similarity }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const parentRef = useRef();
  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current);
  }, [parentRef]);

  return (
    <Flex
      ref={parentRef}
      sx={{
        flexDirection: "column",
        gap: ["10px", "10px", "10px", "20px"],
        minWidth: "300px",
        maxWidth: "350px",
      }}
    >
      <Button
        onClick={() => handleClick()}
        sx={{
          display: "flex",
          borderRadius: "full",
          bg: [
            "backgroundChat",
            "backgroundChat",
            "backgroundChat",
            "background",
          ],
          p: "10px 15px",
          "&:hover": { bg: "backgroundChat", borderRadius: "full" },
          gap: "10px",
          alignItems: ["center", "", "", "flex-start"],
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
      {isOpen && (
        <Flex
          sx={{
            flexDirection: "column",
            fontSize: 1,
            gap: "20px",
            p: "0px 20px",
          }}
        >
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

  const parentRef = useRef();

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <Flex sx={{ gap: "40px", flexDirection: "column", alignItems: "center" }}>
      {/* <Heading
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
      </Heading> */}
      <Flex
        ref={parentRef}
        sx={{
          flexDirection: ["row", null, null, "column"],
          gap: ["10px", "10px", "20px"],
          height: "auto",
          width: "100%",
          overflowX: ["auto", null, null, "none"],
          p: "10px",
        }}
      >
        {embeddings.map((entry) => (
          <DataOfEmbedding
            key={entry.similarity + entry.content.length}
            {...entry}
          />
        ))}
      </Flex>
      <Link
        href="https://zeeg.me/kleber/ventas"
        sx={{
          display: "flex",
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
        <Box
          sx={{
            height: ["20px", "25px"],
            width: "auto",
            minHeight: ["20px", "25px"],
          }}
        >
          <BsCalendarDate style={{ width: "100%", height: "100%" }} />
        </Box>

        <Text sx={{ fontSize: [0, 1], fontWeight: "semibold" }}>
          Agenda tu cita
        </Text>
      </Link>
    </Flex>
  );
};

export default Documents;
