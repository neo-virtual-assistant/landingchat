import {
  BsAndroid,
  BsFacebook,
  BsFillGearFill,
  BsWhatsapp,
} from "react-icons/bs";
import {
  MdCenterFocusStrong,
  MdInstallDesktop,
  MdMultipleStop,
  MdOutlineWeb,
} from "react-icons/md";
import { Box, Button, Flex, Heading, Text } from "theme-ui";
import { RiAdminLine } from "react-icons/ri";
import { BiMessageAltCheck, BiSpreadsheet, BiTrendingUp } from "react-icons/bi";
import { useState } from "react";

const cara = [
  {
    id: 1,
    title: "Simple y al grano",
    imag: <MdCenterFocusStrong style={{ height: "100%", width: "100%" }} />,
    content:
      "Tus clientes quieren comprar y tu quieres vender, la mayoría de tiendas online dan rodeos y tienen elementos innecesarios, WhatShop va al grano",
  },
  {
    id: 2,
    title: "Tu propio sitio web",
    imag: <MdOutlineWeb style={{ height: "100%", width: "100%" }} />,
    content:
      "Es tu propia tienda online individual y privada, no es una plataforma donde hay varios negocios, es una plataforma dedicada unicamente para tu negocio con tu logo y nombre",
  },
  {
    id: 3,
    title: "Simple Whatsapp",
    imag: <BsWhatsapp style={{ height: "100%", width: "100%" }} />,
    content:
      "Deja los sistemas complicados, whatsapp es la forma más sencilla de comunicarse con los clientes, whatShop permite que los pedidos te llegan al whatsapp",
  },
  {
    id: 4,
    title: "App Progresiva PWA",
    imag: <BsAndroid style={{ height: "100%", width: "100%" }} />,
    content: "WhatShop también te permite tener tu propia aplicación móvil",
  },
  {
    id: 5,
    imag: <RiAdminLine style={{ height: "100%", width: "100%" }} />,
    title: "Simple administración",
    content: "Sube tus productos de forma simple",
  },
  {
    id: 6,
    title: "Sitio web veloz",
    imag: <BiMessageAltCheck style={{ height: "100%", width: "100%" }} />,
    content:
      "La mayoría de sitios web cargan lento, WhatShop es instantáneo y permite una navegación cómoda",
  },
  {
    id: 7,
    title: "Instalación rápida",
    imag: <MdInstallDesktop style={{ height: "100%", width: "100%" }} />,
    content:
      "Te lo instalamos en una hora, la mayoría de sitios web tardan semanas en estar listas (y con fallos)",
  },
  {
    id: 8,
    title: "Escalable",
    imag: <BiTrendingUp style={{ height: "100%", width: "100%" }} />,
    content:
      "Otros servicios ofrecen una tienda online que nunca más será actualizada, WhatShop cada vez tiene más beneficios y al mismo precio",
  },
  {
    id: 9,
    title: "Soporte técnico",
    imag: <BsFillGearFill style={{ height: "100%", width: "100%" }} />,
    content: "Soporte técnico de bugs y asesoría",
  },
  {
    id: 10,
    title: "Conecta Google Sheet",
    imag: <BiSpreadsheet style={{ height: "100%", width: "100%" }} />,
    content:
      "Todos tus pedidos se registrarán automáticamente en una hoja de Google Sheet (excel)",
  },
  {
    id: 11,
    title: "Pixel de Facebook",
    imag: <BsFacebook style={{ height: "100%", width: "100%" }} />,
    content:
      "Instalación de tu pixel de Facebook, para medir estadísticas de tu sitio web y hacer re-marketing en Facebook",
  },
  {
    id: 12,
    title: "Multi Líneas Whatsapp",
    imag: <MdMultipleStop style={{ height: "100%", width: "100%" }} />,
    content:
      "Con WhatShop una misma tienda online puede recibir pedidos a distintos números de whatsapp, muy útil para negocios con varios vendedores",
  },
];

const Cards = ({ id, content, title, imag }) => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <Flex
      key={id}
      sx={{
        gap: ["10px", null, null, "20px"],
        maxWidth: "380px",
        width: "100%",
        background: "#1E1E20",
        p: ["15px 20px 15px 15px", "20px 40px 20px 28px", null, "20px 40px 20px 28px"],
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
          width: ["30px","30px","30px","45px"],
          height: ["30px", "30px" , "30px","45px"],
          minWidth: ["30px","30px","30px","45px"],
        }}
      >
        {imag}
      </Box>
      <Flex sx={{ flexDirection: "column", gap: "5px" }}>
        <Text
          as="span"
          sx={{
            fontWeight: "bold",
            fontSize: [1,1,2,2],
            background: "primaryGradient",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </Text>
        <Text
          as="p"
          sx={{
            fontSize: [0,0,1,1],
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {showMore
            ? content
            : `${
                content.length > 80
                  ? `${content.substring(0, 80)}...`
                  : content.substring(0, 80)
              }`}
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
    <Box as="section" sx={{ p: "100px 0px" }}>
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
