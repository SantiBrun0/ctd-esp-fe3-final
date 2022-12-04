import React from "react";
import { useContextGlobal } from "./utils/ContextGlobal";

const Footer = () => {
  const { theme } = useContextGlobal();
  return (
    <footer className="footer" id={theme.theme}>
      <p>Powered by</p>
      <img src="./images/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;
