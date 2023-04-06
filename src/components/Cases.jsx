import { AspectRatio, Box, Button, Flex, Heading, Image, Text } from "theme-ui";

const cardsUse = [
  {
    id: 1,
    img: "img/bussines.svg",
    title: "Empresas de seguros",
    content:
      "Explica contratos complejos a tus asegurados, los contratos siempre suelen ser difíciles de Explicar, suelen tener muchas preguntas y las consultas de los usuarios pueden ser bastante complejas, es algo que hasta ahora si o si necesitaba de la ayuda de un humano, pero ahora podrás subir todos tus contratos y tus asegurados podrán preguntar y la AI será capaz de responder en base a dicha información",
  },
  {
    id: 2,
    img: "img/faq.svg",
    title: "Preguntas frecuentes",
    content:
      "En muchos negocios las consultas de los clientes suelen ser las mismas y repetitivas, aveces añadiendo un detalle extra que necesita la atención de humanos, sin embargo ahora todas esas preguntas frecuentes las puede responder la AI",
  },
  {
    id: 3,
    img: "img/shopcart.svg",
    title: "Ecommerce pedidos",
    content:
      'para los que tienen Ecommerce una de las consultas más frecuentes es los estados de los pedidos "dónde está mi pedido?" y responder esto suele ser muy laborioso, ahora gracias a la AI más nuestras integraciones de nuestra plataforma podrás responder a tus clientes el estado del pedido en lenguaje natural',
  },
  {
    id: 4,
    img: "img/lead.svg",
    title: "Captura de Lead",
    content:
      "Muchos negocios recurren a los formularios para poder obtener un Lead de un cliente, preguntando datos del usuario, ahora podrás preguntar a tus clientes en lenguaje natural y obtener la información de dicho Lead y subirlo en alguna base de datos, poder extraer los datos importantes en el formato correcto",
  },
  {
    id: 5,
    img: "img/info.svg",
    title: "Consulta de información",
    content:
      "En realidad hay muchos casos de usos y ponerlos todos acá sería bastante, básicamente tus usuarios podrán consultar casi cualquier tipo de información que pueda ser descrito en Texto",
  },
];

const Cases = () => {
  return (
    <Box as="section" sx={{ p: "20px 0px 100px" }}>
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
      <Flex
        sx={{
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
          mb: "30px",
        }}
      >
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
            <Box
              sx={{
                width: "100%",
                maxHeight: "180px",
                minHeight: "180px",
                p: "20px",
                "&:hover": {
                  bg: "backgroundChat",
                  borderRadius: "light",
                  aspectRatio: "1/1",
                },
              }}
            >
              <Image
                src={entry.img}
                sx={{
                  width: "100%",
                  height: "100%",
                  AspectRatio: "1/1",
                }}
              ></Image>
            </Box>
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
      {/* <Button
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
      </Button> */}
    </Box>
  );
};

export default Cases;
