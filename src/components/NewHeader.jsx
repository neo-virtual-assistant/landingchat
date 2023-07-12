import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "theme-ui";
import Suggestions from "./Suggestions";

const NewHeader = () => {
  return (
    <Flex
      sx={{
        gap: "60px",
        justifyContent: "center",
        alignItems: "center",
        py: "150px",
        flexWrap: "wrap",
      }}
    >
      <Flex sx={{ flexDirection: "column", gap: "30px", alignItems:"center" }}>
 
          <Image
            src="/img/videoImg.png"
            sx={{ width: "520px", aspectRatio: "16/9", objectFit: "cover" }}
          />
      
        <Suggestions />
      </Flex>

      <Flex
        sx={{
          maxWidth: "480px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Heading as="h1">
          Asistente Virtual que{" "}
          <Text
            as="span"
            sx={{
              background: "primaryGradient",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Impulsa Tu Empresa
          </Text>{" "}
          en Todas las Plataformas
        </Heading>
        <Text as="p">
          Nuestra IA está diseñada para brindar información detallada sobre tu
          empresa y sus productos en múltiples plataformas, incluyendo WhatsApp,
          Telegram, Facebook, tu sitio web, etc.
        </Text>
        <Text as="p">
          Optimiza la eficiencia de tu equipo, brinda una experiencia
          excepcional a tus clientes, generando mayor satisfacción y lealtad.
        </Text>
        <Text as="p">
          Convierte consultas en ventas, automatiza tareas repetitivas y brinda
          un servicio al cliente de primera clase.
        </Text>
        <Button
          sx={{
            color: "textSecondary",
            p: "10px 50px",
            m: "0 auto",
            display: "flex",
            background: "primaryGradient",
            fontWeight: "semibold",
            borderRadius: "full",
          }}
        >
          ¡Descúbrelo ahora!
        </Button>
      </Flex>
    </Flex>
  );
};

export default NewHeader;
