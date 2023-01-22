import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import { Section, Subtitle } from "../globalCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div id="contact" className="areaContact item">
      <Header />
      <Subtitle>
        Minhas <span className="red">habilidades</span>
      </Subtitle>
      <Section>
        
      </Section>
      <Footer />
    </div>
  );
}

export default Contact;
