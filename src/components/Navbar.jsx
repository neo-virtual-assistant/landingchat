import { MdOutlineDarkMode } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { Box, Flex, Text, Button, IconButton, NavLink, Image } from "theme-ui";

import Sidebar from "./Sidebar";
import Link from "next/link";

const Links = [
  {
    name: "Product",
    url: "/",
  },
  {
    name: "Pricing",
    url: "/",
  },
  {
    name: "Integrations",
    url: "/",
  },
  {
    name: "Resources",
    url: "/",
  },
];

const Navbar = () => {
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
        <Image src="./img/logo.svg" sx={{ aspectRatio: "1/1", height:"40px"}}/>
        {/* {Links.map((v) => (
          <Flex
            key={v.name}
            as="nav"
            sx={{ ml: 4, gap: 20, display: ["none", null, null, "flex"] }}
          >
            <Link href={v.url} legacyBehavior passHref>
              <NavLink sx={{ fontSize: 1, fontWeight: "regular" }}>
                {v.name}
              </NavLink>
            </Link>
          </Flex>
        ))} */}
      </Flex>
      <Flex sx={{ alignItems: "center", gap: 15 }}>
        {/* <IconButton
          sx={{ color: "primary", width: "28px", height: "28px", p: 0 }}
        >
          <MdOutlineDarkMode style={{ width: "100%", height: "100%" }} />
        </IconButton>
        <IconButton
          sx={{
            display: ["block", null, null, "none"],
            color: "primary",
            width: "28px",
            height: "28px",
            p: 0,
          }}
          aria-label="Toggle Sidebar"
          onClick={() => toggleSideBar()}
        >
          <BiMenu style={{ width: "100%", height: "100%" }} />
        </IconButton>

        <Flex
          sx={{
            alignItems: "center",
            gap: 15,
            display: ["none", null, "none", "flex"],
          }}
        >
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
        </Flex> */}
      </Flex>
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
    </Box>
  );
};

export default Navbar;
