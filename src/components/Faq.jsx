import { Box, Button, Flex, Heading, Text } from "theme-ui";

const questions = [
  {
    id: 1,
    title: "¿Cuales son los precios del servicio?",
  },
  {
    id: 2,
    title: "Deseo agendar una reunion",
  },
  {
    id: 3,
    title: "¿Como puedo trabajar con ustedes?",
  },
  {
    id: 4,
    title: "¿Das cursos?",
  },
];

const Faq = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        maxWidth: "500px",
        gap: "30px",
        p: ["15px 0px","25px 0px","25px 0px","40px 0px"],
      }}
    >
      <Flex sx={{ flexDirection: "column", gap: "15px" }}>
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
          Preguntas sugeridas
        </Heading>
        <Text sx={{ fontSize: [0, 1, 2] }}>
          hemos creado una forma rápida y sencilla de obtener respuestas a tus
          dudas más comunes y las hemos organizado en botones de acceso rápido.
        </Text>
      </Flex>
      <Flex
        sx={{
          flexDirection: ["row", null, null, "column"],
          gap: ["10px", "10px", "15px"],
          width: "100%",
          overflowX: ["auto", null, null, "none"],
        }}
      >
        {questions.map(({ id, title }) => (
          <Button
            key={id}
            sx={{
              minWidth: ["350px", "350px", "350px", "auto"],
              maxWidth: "350px",
              color: "textSecondary",
              p: ["8px 20px", "10px 25px", "10px 40px", "10px 40px"],
              marginRight: "auto",
              background: "primaryGradient",
              fontWeight: "medium",
              borderRadius: "full",
              fontSize: [0, 1, 2],
              "&:hover": { background: "backgroundChat", color: "primary" },
            }}
          >
            {title}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Faq;
