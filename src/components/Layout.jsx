import Head from "next/head";

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Kleber AI</title>
        <meta
          name="description"
          content="Kleber AI es un asistente virtual basado en Inteligencia Artificial (IA), adaptado para empresas innovadoras y de vanguardia, diseñado para emular conversaciones, interactuar en lenguaje natural con personas y proporcionar asistencia al cliente."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* metatags for facebook */}
        <meta property="og:url" content="https://web.kleber.digital/" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Kleber AI: asistente virtual basado en Inteligencia Artificial"
        />
        <meta
          property="og:description"
          content="Kleber AI es un asistente virtual basado en Inteligencia Artificial (IA), adaptado para empresas innovadoras y de vanguardia, diseñado para emular conversaciones, interactuar en lenguaje natural con personas y proporcionar asistencia al cliente."
        />
        <meta
          property="og:image"
          content="https://web.kleber.digital/img/bussines.svg"
        />

        {/* metatags for twitter */}
        {/* <meta name="twitter:site" content="@nombre_usuario" /> */}
        <meta
          name="twitter:title"
          content="NEO: Asistente Virtual impulsado por Inteligencia Artificial"
        />
        <meta
          name="twitter:description"
          content="NEO es un Asistente Virtual impulsado por Inteligencia Artificial (IA), personalizado para negocios innovadores y empresas de próxima generación, diseñado para simular conversaciones, interactuar con humanos en lenguaje natural y dar soporte al cliente."
        />
        <meta
          name="twitter:image"
          content="https://web.kleber.digital/img/bussines.svg"
        />
      </Head>
      <div>{children}</div>
    </>
  );
}
