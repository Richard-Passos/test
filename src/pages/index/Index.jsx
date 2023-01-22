import Footer from "../../components/global/Footer";
import Header from "../../components/global/Header";
import { Section, Span, Title, Text } from "../globalCss";
import { IndexMain as Main, DinamicSpan, Button } from "./indexCss";
import imgDev from "../../img/imgDev.png"

function Index() {
  return (
    <div id="index" className="areaIndex item">
      <Header />
      <Section>
        <div>
          <Main>
            <Span>Boas vindas, me chamo</Span>
            <div>
              <Title>Richard Passos.</Title>
              <Title>
                Desenvolvedor <DinamicSpan>Front-end.</DinamicSpan>
              </Title>
            </div>
            <Text>Sou um desevolvedor Front-end.</Text>
            <Text>
              Estudando para me tornar um desenvolvedor FullStack na{" "}
              <em className="red">Fullture School</em> e{" "}
              <em className="red">OneBitCode</em>.
            </Text>
          </Main>
          <Button>Baixar CV</Button>
        </div>
        <img
          src={imgDev}
          alt="img dev"
          width={500}
        />
      </Section>
      <Footer />
    </div>
  );
}

export default Index;