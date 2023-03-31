import Navbar from "@/components/Navbar";
import { Box, ThemeProvider } from "theme-ui";
import { myTheme } from "@/theme-ui";
import Header from "@/components/Header";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <ThemeProvider theme={myTheme}>
      <Layout>
        <Box as="main" sx={{ m: "0 auto", maxWidth: "container", p: "0 20px" }}>
          <Navbar />
          <Header />
        </Box>
      </Layout>
    </ThemeProvider>
  );
}
