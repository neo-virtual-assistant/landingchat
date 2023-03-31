import { Flex, Box, Button, Close, NavLink } from "theme-ui";
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

const Sidebar = ({ setShowSidebar }) => {
  return (
    <Box
      as="section"
      sx={{
        position: "fixed",
        zIndex: "999",
        width: "100%",
        height: "100%",
        backgroundColor: "background",
        top: 0,
        left: 0,
      }}
    >
      <Close
        onClick={() => setShowSidebar(false)}
        sx={{ position: "absolute", top: "30px", right: "18px" }}
      />
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "75%",
            gap: "20px",
          }}
        >
          {Links.map((v) => (
            <Link key={v.name} href={v.url} legacyBehavior passHref>
              <NavLink
                onClick={() => setShowSidebar(false)}
                sx={{ fontSize: 2, fontWeight: "regular" }}
              >
                {v.name}
              </NavLink>
            </Link>
          ))}
        </Flex>

        <Flex
          sx={{
            alignItems: "center",
            gap: 15,
            flexDirection: "column",
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
