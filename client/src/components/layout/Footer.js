import React from "react";

var style = {
  backgroundColor: "black",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  color: "white",
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

function Footer() {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        Developed by{" "}
        <a
          href="https://github.com/Arulpiruthiviraj"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arulpiruthiviraj
        </a>{" "}
      </div>
    </div>
  );
}

export default Footer;
