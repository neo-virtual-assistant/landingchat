import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';

function logGoatCounterPageview(url) {
  // si el script ya está cargado (.goatcounter existe en window) 
  
  if (!window.goatcounter || !window.goatcounter.count) return;
  
  // loguear la visita a GoatCounter
  window.goatcounter.count({
    path: url,
    event: false,
  });
}

// definir el componente
export function GoatCounter() {
  const router = useRouter();

  // llamar a la función auxiliar en cada cambio de ruta
  useEffect(() => {
    router.events.on('routeChangeComplete', logGoatCounterPageview);

    return () => {
      router.events.off('routeChangeComplete', logGoatCounterPageview);
    };
  }, [router.events]);

  return (
    <Script
      data-goatcounter-settings='{"allow_local": true, "no_onload": true}'
      data-goatcounter="https://lilnait.goatcounter.com/count"
      src="//gc.zgo.at/count.js"
      strategy="afterInteractive"
    />
  );
}