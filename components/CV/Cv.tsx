import React from "react";

const Cv = () => {
  return (
    <a
      href="/CV%20Tsiory.pdf"
      onClick={() => confirm("Voulez-vous telecharger le CV de Tsiory?")}
      download
      className="cv-link"
      style={{ textDecoration: "none" }}
    >
      CV ↓
    </a>
  );
};

export default Cv;
