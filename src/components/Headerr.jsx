import { IoMdChatboxes } from "react-icons/io";
import { Box, Heading, Text, Flex } from "theme-ui";
import { Documents } from "./Documents/Documents";
import Chat from "./Chat/Chat";
import Chatt from "./Chatt";
import Documentss from "./Documentss";

const Headerr = () => {
  return (
    <Flex
      as="section"
      sx={{
        justifyContent: "space-between",
        gap: "30px",
        p: "20px 60px",
        m: "60px 0px",
      }}
    >
      <Documentss />
      <Chatt />
    </Flex>
  );
};

export default Headerr;
