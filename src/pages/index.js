import Navbar from "@/components/Navbar";
import { Box, ThemeProvider } from "theme-ui";
import { myTheme } from "@/theme-ui";
import { Layout } from "@/components/Layout";
import dynamic from "next/dynamic";
import Characteristics from "@/components/Characteristics";
import Cases from "@/components/Cases";


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
          <Characteristics />
          <Cases />
      
        </Box>
      </Layout>
    </ThemeProvider>
  );
}
