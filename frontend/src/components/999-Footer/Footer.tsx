import React from "react";

export default function Footer() {
    const footerStyle: React.CSSProperties = {
      textAlign: "center",
      marginTop: "60px",
      bottom: "0",
      width: "100%",
      backgroundColor: "#2e2d2d",
      color: "#FFF",
      padding: "10px"
    };

    return(
        <div style={footerStyle}>
            &copy; Kevin Barrios. All Rights Reserved
        </div>
    )
}
