import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (!window.goatcounter || !window.goatcounter.count) return alert("hola");

    if (typeof window !== "undefined") {
      window.goatcounter.count({
        path: router.asPath,
      });
    }
  }, [router]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
