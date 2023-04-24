import { Box, Button, Flex, Heading, Text } from "theme-ui";
import { AiFillCheckCircle } from "react-icons/ai";

const Prices = () => {
  return (
    <Flex sx={{ flexDirection: "column", gap: "80px", py:"80px" }}>
      <Flex sx={{ flexDirection: "column", gap: "5px" }}>
        <Heading as="h3" sx={{ fontSize: [4, 5, 5, 5] }}>
          Precios
        </Heading>
        <Text sx={{ fontSize: [0, 1, 1, 2] }}>
          Cada paquete incluye una variedad de servicios y características
          diseñadas para ayudarte a alcanzar tus objetivos y obtener el máximo
          valor por tu dinero.
        </Text>
      </Flex>
      <Flex sx={{ flexWrap: "wrap", gap:"40px", justifyContent:"center" }}>
        <Flex
          sx={{
            flexDirection: "column",
            gap: "30px",
            maxWidth: "290px",
            px: [4],
            py: [4],
            background: "backgroundChat",
            height: "480px",
            borderRadius: "light",
            mt:"30px"
          }}
        >
          <Flex sx={{ flexDirection: "column" }}>
            <Text sx={{ fontSize: [2, 3, 3, 3], fontWeight: "bold" }}>
              Esencial
            </Text>
            <Text sx={{ fontSize: [0, 1, 1, 1], color: "#A1A1AA" }}>
              Bueno para tener una web informativa de preguntas frecuentes
            </Text>
          </Flex>
          <Flex sx={{ alignItems: "flex-end" }}>
            <Text
              sx={{ fontWeight: "bold", mb: "2px", fontSize: [2, 3, 4, 4] }}
            >
              $.
            </Text>
            <Text
              sx={{
                display: "flex",
                fontSize: [3, 4, 5, 5],
                fontWeight: "bold",
              }}
            >
              390
            </Text>
            <Text sx={{ mb: "4px", fontSize: [0, 1, 2, 2] }}>/mes</Text>
          </Flex>
          <Button
            sx={{
              fontSize: [0],
              color: "background",
              fontWeight: "bold",
              background: "primaryGradient",
            }}
          >
            Contacto
          </Button>
          <hr
            style={{
              border: "none",
              height: "1px",
              background: "#000",
              background:
                "repeating-linear-gradient(90deg,#FFF,#FFF 6px,transparent 6px,transparent 12px)",
            }}
          />
          <Flex sx={{ alignItems: "flex-start", gap: "5px" }}>
            <Box
              sx={{
                color: "primary",
                minWidth: "15px",
                minHeight: "15px",
                maxWidth: "15px",
                maxHeight: "15px",
                p: 0,
                mt: "1px",
              }}
            >
              <AiFillCheckCircle style={{ width: "100%", height: "100%" }} />
            </Box>
            <Text sx={{ fontSize: [0, 1, 1, 1] }}>
              Bot de consultas integrado en un enlace de un sitio web.
            </Text>
          </Flex>
        </Flex>

        <Flex
          sx={{
            flexDirection: "column",
            gap: "30px",
            maxWidth: "290px",
            px: [4],
            py: [4],
            background: "backgroundChat",
            height: "480px",
            borderRadius: "light",
            boxShadow:"6px 6px #5EEAD4",
            
          }}
        >
          <Flex sx={{ flexDirection: "column" }}>
            <Text sx={{ fontSize: [2, 3, 3, 3], fontWeight: "bold" }}>
            Recomendado
            </Text>
            <Text sx={{ fontSize: [0, 1, 1, 1], color: "#A1A1AA" }}>
            Bueno para atención al cliente y ventas
            </Text>
          </Flex>
          <Flex sx={{ alignItems: "flex-end" }}>
            <Text
              sx={{ fontWeight: "bold", mb: "2px", fontSize: [2, 3, 4, 4] }}
            >
              $.
            </Text>
            <Text
              sx={{
                display: "flex",
                fontSize: [3, 4, 5, 5],
                fontWeight: "bold",
              }}
            >
              490
            </Text>
            <Text sx={{ mb: "4px", fontSize: [0, 1, 2, 2] }}>/mes</Text>
          </Flex>
          <Button
            sx={{
              fontSize: [0],
              color: "background",
              fontWeight: "bold",
              background: "primaryGradient",
            }}
          >
            Contacto
          </Button>
          <hr
            style={{
              border: "none",
              height: "1px",
              background: "#000",
              background:
                "repeating-linear-gradient(90deg,#FFF,#FFF 6px,transparent 6px,transparent 12px)",
            }}
          />
          <Flex sx={{ alignItems: "flex-start", gap: "5px" }}>
            <Box
              sx={{
                color: "primary",
                minWidth: "15px",
                minHeight: "15px",
                maxWidth: "15px",
                maxHeight: "15px",
                p: 0,
                mt: "1px",
              }}
            >
              <AiFillCheckCircle style={{ width: "100%", height: "100%" }} />
            </Box>
            <Text sx={{ fontSize: [0, 1, 1, 1] }}>
            Whatsapp, Messenger, Instagram, Webchat. bueno para ventas y atención al cliente
            </Text>
          </Flex>
        </Flex>

        <Flex
          sx={{
            flexDirection: "column",
            gap: "30px",
            maxWidth: "290px",
            px: [4],
            py: [4],
            background: "backgroundChat",
            height: "480px",
            borderRadius: "light",
            mt:"30px"
          }}
        >
          <Flex sx={{ flexDirection: "column" }}>
            <Text sx={{ fontSize: [2, 3, 3, 3], fontWeight: "bold" }}>
            Avanzado
            </Text>
            <Text sx={{ fontSize: [0, 1, 1, 1], color: "#A1A1AA" }}>
            Para empresas con mucho volumen de información que necesita automatizaciones y extraer información de los usuarios 
            </Text>
          </Flex>
          <Flex sx={{ alignItems: "flex-end" }}>
            <Text
              sx={{ fontWeight: "bold", mb: "2px", fontSize: [2, 3, 4, 4] }}
            >
              $.
            </Text>
            <Text
              sx={{
                display: "flex",
                fontSize: [3, 4, 5, 5],
                fontWeight: "bold",
              }}
            >
              590
            </Text>
            <Text sx={{ mb: "4px", fontSize: [0, 1, 2, 2] }}>/mes</Text>
          </Flex>
          <Button
            sx={{
              fontSize: [0],
              color: "background",
              fontWeight: "bold",
              background: "primaryGradient",
            }}
          >
            Contacto
          </Button>
          <hr
            style={{
              border: "none",
              height: "1px",
              background: "#000",
              background:
                "repeating-linear-gradient(90deg,#FFF,#FFF 6px,transparent 6px,transparent 12px)",
            }}
          />
          <Flex sx={{ alignItems: "flex-start", gap: "5px" }}>
            <Box
              sx={{
                color: "primary",
                minWidth: "15px",
                minHeight: "15px",
                maxWidth: "15px",
                maxHeight: "15px",
                p: 0,
                mt: "1px",
              }}
            >
              <AiFillCheckCircle style={{ width: "100%", height: "100%" }} />
            </Box>
            <Text sx={{ fontSize: [0, 1, 1, 1] }}>
            Sincronizar bases de datos (ejemplo: info de productos, clientes, pedidos, blogs, articulos, etc).
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Prices;
