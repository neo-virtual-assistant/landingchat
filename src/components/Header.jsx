import { Flex } from "theme-ui";
import Chat from "./Chat";
import Documents from "./Documents";

const Header = () => {
  return (
    <Flex
      as="section"
      sx={{
        justifyContent: "center",
        gap: ["60px", "70px", "120px"],
        m: "80px 0px",
        flexWrap: "wrap",
      }}
    >
      <Documents />
      <Chat />
    </Flex>
  );
};

export default Header;
