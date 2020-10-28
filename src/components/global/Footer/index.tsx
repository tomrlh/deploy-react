import React from "react";

export const Footer = () => (
  <footer className="page-footer font-small teal" style={styles.fixPadding}>
    <div className="footer-copyright text-center py-3" style={styles.container}>
      <div className="view overlay z-depth-1-half">
        <img
          src="/images/logo.png"
          className="img-fluid ui tiny image"
          alt="logo"
        />
        <a href="/#">
          <div className="mask rgba-white-light"></div>
        </a>
      </div>
      <span>
        Agroquality LTDA © {new Date().getFullYear()} Todos os direitos
        reservados
      </span>
    </div>
  </footer>
);

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderTopColor: "#a8a8a8",
    borderTopWidth: "thick",
    background:
      "linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(195,195,195,1) 100%)",
  },
  fixPadding: {
    position: "fixed",
    paddingTop: 0,
    paddingBottom: 0,
  },
} as const;
