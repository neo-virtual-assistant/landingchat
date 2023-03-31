import Navbarr from "@/components/Navbarr";
import { Box, ThemeProvider } from "theme-ui";
import { myTheme } from "@/theme-ui";
import Headerr from "@/components/Headerr";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <ThemeProvider theme={myTheme}>
      <Layout>
        <Box as="main" sx={{ m: "0 auto", maxWidth: "container", p: "0 20px" }}>
          <Navbarr />
          <Headerr />
        </Box>
      </Layout>
    </ThemeProvider>
  );
}
