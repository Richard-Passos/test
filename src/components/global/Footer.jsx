import { Footer as FooterCss, FooterAnchor as A } from "./footerCss"

function Footer() {
  return (
    <FooterCss>
      <p>
        @ Site desenvolvido por{" "}
        <A href="https://github.com/Richard-Passos" className="footerName">
          Richard Passos
        </A>{" "}
        - 2023
      </p>
    </FooterCss>
  );
}

export default Footer;
 