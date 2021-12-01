import React from "react";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";

const index = () => {
  const copyDiscord = () => {
    navigator.clipboard
      .writeText("agosho#4465")
      .then(toast("¡Discord copiado!"));
  };

  return (
    <>
      <header className="header">
        <h1>Berois Agustín</h1>
        <div className="header__social">
          <a
            href="https://twitter.com/agoshoUY"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/beroisagustin"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <button onClick={copyDiscord}>Discord</button>
          <a href="https://twitch.tv/agosho" target="_blank" rel="noreferrer">
            Twitch
          </a>
        </div>
      </header>
      <Toaster
        toastOptions={{
          duration: 2500,
          style: {
            background: "rgb(212, 212, 212)",
          },
        }}
      />
    </>
  );
};

export default index;
