import Navbar from "@/components/Navbar";
import { Box, ThemeProvider } from "theme-ui";
import { myTheme } from "@/theme-ui";
import { Layout } from "@/components/Layout";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import('../components/Header'), {
  ssr: false,
});


export default function Home() {
  return (
    <ThemeProvider theme={myTheme}>
      <Layout>
        <Box as="main" sx={{ m: "0 auto", maxWidth: "container", p: "0 20px" }}>
          <Navbar />
          <DynamicHeader />
        </Box>
      </Layout>
    </ThemeProvider>
  );
}
