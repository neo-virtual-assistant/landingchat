import { useEffect, useState } from "react";

export function usePrompt() {

  const [prompt, setPrompt] = useState("");
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
  }, [prompt]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { prompt } = Object.fromEntries(new window.FormData(e.target));
    getAnswer({ prompt });
    console.log("prompt", prompt);
    setMessage("");
  };

  return { prompt, setPrompt };
}
