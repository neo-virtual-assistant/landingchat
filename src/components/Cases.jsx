import { Box, Button, Flex, Heading, Image, Text } from "theme-ui";

const cardsUse = [
  {
    id: 1,
    img: "img/bussines.svg",
    title: "Empresas de seguro",
    content:
      "Usa el bot para explicar a tus clientes clausulas complejas de contrato",
  },
  {
    id: 2,
    img: "img/shopCart.svg",
    title: "Catálogo de productos",
    content:
      "Sus clientes pueden ver la lista de productos con sus respectivos precios y descripciones",
  },
  {
    id: 3,
    img: "img/shopping.svg",
    title: "Carrito de compras",
    content:
      "Sus clientes podrán seleccionar sus productos, seleccionar cantidades o variantes de sus productos ( talla, tamaño, color)",
  },
];

const Cases = () => {
  return (
    <Box as="section" sx={{ p: "100px 0px" }}>
      <Heading
        as="h3"
        sx={{ mb: "60px", display: "inline-block", fontSize: [4, 5, 5, 5] }}
      >
        Casos de uso de{" "}
        <Text
          sx={{
            fontSize: [4, 5, 5, 5],
            background: "primaryGradient",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          David AI
        </Text>
      </Heading>
      <Flex sx={{ gap: "30px", justifyContent: "center", flexWrap:"wrap", mb: "30px" }}>
        {cardsUse.map((entry) => (
          <Flex
            key={entry.id}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "280px",
              gap: "20px",
              p: "30px",
              border: [1],
              borderColor: "borderColor",
              borderRadius: "regular",
            }}
          >
            <Image
              src={entry.img}
              sx={{ maxWidth: "200px", maxHeight: "150px" }}
            ></Image>
            <Flex
              sx={{
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <Text
                sx={{
                  fontSize: [2],
                  fontWeight: "bold",
                  background: "primaryGradient",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {entry.title}
              </Text>
              <Text sx={{ fontSize: [1] }}>{entry.content}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Button
        sx={{
          color: "textSecondary",
          p: "10px 50px",
          m: "0 auto",
          display: "flex",
          background: "primaryGradient",
          fontWeight: "medium",
          borderRadius:"full"
        }}
      >
        Ver precio y beneficios
      </Button>
    </Box>
  );
};

export default Cases;
