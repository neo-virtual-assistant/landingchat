import { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "theme-ui";

const ideas = [
  "¿Sabias que nuestra ia se puede integrar con tu base de datos Shopify?",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
];

const Suggestions = () => {
  const [sug, setSug] = useState(
    "¿Sabias que nuestra ia se puede integrar con tu base de datos Shopify?"
  );

  const getSuggestion = () => {
    const newSuggestion = ideas[Math.floor(Math.random() * ideas.length)];
    setSug(newSuggestion);
  };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       getSuggestion();
//     }, 5000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

  return (
    <Flex sx={{ justifyContent: "center", maxWidth: "400px", gap:"15px", alignItems:"center" }}>
      <Box sx={{ maxWidth: "100px" }}>
        <Image
          src="/img/know.png"
          sx={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
        />
      </Box>
      <Text sx={{color:"#9c9c9c"}}>{sug}</Text>
    </Flex>
  );
};

export default Suggestions;
