import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import myPhoto from "../../img/myPhoto.png"
import { Section50, Text, Subtitle } from "../globalCss";
import { ContainerText, ContainerEmail, Span } from "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

function About() {
  const copyEmail = useRef()
  const email = useRef()
  const copied = useRef();

  function copy() {
    const text = email.current.innerText;
    navigator.clipboard.writeText(text);
    copied.current.classList.remove("displayNone")

    setTimeout(() => {
      copied.current.classList.add("displayNone");
    }, 1500);
  }

  useEffect(() => {
    copyEmail.current.addEventListener("click", copy);
  }, [])

  return (
    <div id="#about" className="areaAbout item">
      <Header />
      <Section50>
        <picture>
          <img src={myPhoto} alt="Imagem minha" width={300} />
        </picture>

        <ContainerText>
          <div>
            <Subtitle>
              So<span className="red">bre m</span>im
            </Subtitle>
            <Text>
              Meu interesse pela programação começou em dezembro de 2021, desde
              então fui correndo atrás de mais conhecimento sobre a área.
            </Text>
            <Text>
              Onde não só encontrei uma área dos sonhos mas também encontrei uma
              comunidade maravilhosa que fez com minha paixão pela área só
              aumentasse ainda mais.
            </Text>
            <Text>
              Agora tenho certeza que quero chegar ao topo da área dev, e que
              dedicarei tudo de mim para cumprir esse querer.
            </Text>
          </div>

          <div>
            <Text className="red">Email:</Text>
            <ContainerEmail ref={copyEmail}>
              <span className="fa-envelope">
                <FontAwesomeIcon icon={faEnvelope} />
                <span ref={copied} className="copied displayNone">
                  Copied
                </span>
              </span>
              <Span ref={email}>richard.ac.passos12@gmail.com</Span>
            </ContainerEmail>
          </div>
        </ContainerText>
      </Section50>
      <Footer />
    </div>
  );
}

export default About;
