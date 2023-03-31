import { MdOutlineDarkMode } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { Box, Flex, Text, Button, IconButton } from "theme-ui";
import Sidebar from "./Sidebar/Sidebar";

const Navbarr = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Box
      as="nav"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "90px",
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <Text variant="logo">Logo</Text>
        <Flex as="nav" sx={{ ml: 4, gap: 20, 
          background:["red", "blue","green","orange"]
        }}>
          <Text sx={{
            "&:hover":{
              bg:"blue"
            }
          }}>Product</Text>
          <Text variant="navLink">Pricing</Text>
          <Text variant="navLink">Integrations</Text>
          <Text variant="navLink">Resources</Text>
        </Flex>
      </Flex>
      <Flex sx={{ alignItems: "center", gap: 15 }}>
        <IconButton
          sx={{ display: ["block", null, "none"] }}
          aria-label="Toggle Sidebar"
          onClick={() => toggleSideBar()}
        >
          <BiMenu />
        </IconButton>
        <Flex sx={{ color: "primary" }}>
          <MdOutlineDarkMode style={{ width: "28px", height: "28px" }} />
        </Flex>

        <Flex sx={{ alignItems: "center", gap: 15 }}>
          <Button
            sx={{
              color: "text",
              background: "background",
              borderRadius: "light",
            }}
          >
            Login
          </Button>
          <Button
            sx={{
              color: "textSecondary",
              background: "primaryGradient",
              borderRadius: "light",
              fontWeight: "semibold",
            }}
          >
            Sign up
          </Button>
        </Flex>
      </Flex>
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
    </Box>
  );
};

export default Navbarr;
