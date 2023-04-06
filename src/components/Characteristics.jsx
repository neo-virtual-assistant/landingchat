import { BsChatText, BsFileEarmarkText } from "react-icons/bs";
import {
  MdFaceRetouchingNatural,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";
import { Box, Button, Flex, Heading, Text } from "theme-ui";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { HiLanguage } from "react-icons/hi2";
import { TbStatusChange, TbTextRecognition } from "react-icons/tb";
import { GoIssueClosed } from "react-icons/go";

const cara = [
  {
    id: 1,
    title: "Lenguaje natural",
    imag: <HiLanguage style={{ height: "100%", width: "100%" }} />,
    content:
      "Una IA que entiende y responde en Lenguaje natural para tu negocio (GPT3.5 y GPT4)",
  },
  {
    id: 2,
    title: "Atención 24/7",
    imag: <RiCustomerService2Fill style={{ height: "100%", width: "100%" }} />,
    content:
      "Brinda atención 24/7 a tus usuarios como si fuera un humano quien está atendiendo a todos los mensajes que te llegan",
  },
  {
    id: 3,
    title: "Mucha Información",
    imag: <BsFileEarmarkText style={{ height: "100%", width: "100%" }} />,
    content:
      "Sube toda la información de tu negocio como preguntas frecuentes, productos, servicios, para que la IA pueda aprender y responder en base a esa información",
  },
  {
    id: 4,
    title: "Restricción de Conversación",
    imag: <GoIssueClosed style={{ height: "100%", width: "100%" }} />,
    content:
      "Tu IA sólo conversará sobre los temas indicados, no responderá sobre temas que no tienen que ver con tu negocio",
  },
  {
    id: 5,
    title: "Detección de Intenciones",
    imag: <BsChatText style={{ height: "100%", width: "100%" }} />,
    content:
      "Detecta con inteligencia artificial las intenciones de las conversaciones, para clasificar las conversaciones y saber qué es lo que tus usuarios consultan por chat",
  },
  {
    id: 6,
    title: "Módulo de comportamientos",
    imag: <MdFaceRetouchingNatural style={{ height: "100%", width: "100%" }} />,
    content:
      "La IA puede comportarse de una forma distinta según la circunstancia, puede ser un vendedor, un reclutador de personal, alguien de soporte técnico, etc",
  },
  {
    id: 7,
    title: "Extracción de Información",
    imag: <TbTextRecognition style={{ height: "100%", width: "100%" }} />,
    content:
      "Extrae la información de conversaciones naturales y obtén sólo aquellos datos que necesitas en el formato que necesitas",
  },
  {
    id: 8,
    title: "Omnicanalidad",
    imag: <TbStatusChange style={{ height: "100%", width: "100%" }} />,
    content:
      "Instala el Bot en cualquier plataforma de chat: whatsapp, messenger, instagram, webchat, telegram, comentarios de Facebook, Google Business",
  },
  {
    id: 9,
    title: "Integraciones",
    imag: (
      <MdOutlineIntegrationInstructions
        style={{ height: "100%", width: "100%" }}
      />
    ),
    content:
      "Integra sistemas que ya tienes como Shopify, woocomerce, CRMs, etc.",
  },
];

const Cards = ({ id, content, title, imag }) => {
  const parentRef = useRef();
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current);
  }, [parentRef]);

  return (
    <Flex
      key={id}
      sx={{
        gap: ["10px", null, null, "20px"],
        maxWidth: "380px",
        width: "100%",
        background: "#1E1E20",
        p: [
          "15px 20px 15px 15px",
          "20px 40px 20px 28px",
          null,
          "20px 40px 20px 28px",
        ],
        borderRadius: "regular",
        height: [
          showMore ? "auto" : "140px",
          showMore ? "auto" : "150px",
          showMore ? "auto" : "170px",
          showMore ? "auto" : "150px",
        ],
        minWidth: ["240px", "280px", "320px", "380px"],
      }}
    >
      <Box
        sx={{
          color: "primary",
          width: ["30px", "30px", "30px", "45px"],
          height: ["30px", "30px", "30px", "45px"],
          minWidth: ["30px", "30px", "30px", "45px"],
        }}
      >
        {imag}
      </Box>
      <Flex sx={{ flexDirection: "column", gap: "5px" }}>
        <Text
          as="span"
          sx={{
            fontWeight: "bold",
            fontSize: [1, 1, 2, 2],
            background: "primaryGradient",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </Text>
        <Text
          ref={parentRef}
          as="p"
          sx={{
            fontSize: [0, 0, 1, 1],
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {showMore ? (
            <Text>{content}</Text>
          ) : (
            `${
              content.length > 80
                ? `${content.substring(0, 70)}...`
                : content.substring(0, 80)
            }`
          )}

          {content.length > 80 ? (
            <Button
              onClick={() => handleClick()}
              sx={{
                bg: "#1E1E20",
                background: "primaryGradient",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "medium",
                p: 0,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {showMore ? "Ver menos" : "Ver más"}
            </Button>
          ) : null}
        </Text>
      </Flex>
    </Flex>
  );
};

const Characteristics = () => {
  return (
    <Box as="section" sx={{ p: "50px 0px 100px" }}>
      <Heading
        as="h3"
        sx={{ mb: "60px", display: "inline-block", fontSize: [4, 5, 5, 5] }}
      >
        ¿Que caracteristicas tiene{" "}
        <Text
          sx={{
            fontSize: [4, 5, 5, 5],
            background: "primaryGradient",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          David AI?
        </Text>
      </Heading>

      <Flex
        sx={{
          gap: "20px",
          flexWrap: ["", "", "nowrap", "wrap"],
          alignItems: "center",
          justifyContent: ["start", null, null, "center"],
          overflowX: ["auto", null, null, "none"],
          width: "100%",
          height: [null, null, null, "auto"],
        }}
      >
        {cara.map((entry) => (
          <Cards key={entry.id} {...entry} />
        ))}
      </Flex>
    </Box>
  );
};

export default Characteristics;
