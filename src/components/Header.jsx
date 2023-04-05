import { Flex } from "theme-ui";
import Chat from "./Chat";
import Documents from "./Documents";

const Header = () => {
  return (
    <Flex
      as="section"
      sx={{
        justifyContent: "center",
        gap: ["10px", "20px","20px", "120px"],
        m: ["0px","","","60px 0px"],
        flexWrap: "wrap",
      }}
    >
      <Chat />
      <Documents />
    </Flex>
  );
};

export default Header;
