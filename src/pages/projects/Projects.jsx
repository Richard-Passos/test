import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import { Section50, Subtitle } from "../globalCss";
import {
  AlignProjects,
  Ul,
  Li,
  Card,
  LiImg,
  LiText,
  Button,
} from "./projectsCss";
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";

import img1 from "../../img/projects/todoListImg.png";
import img2 from "../../img/projects/editorRichTextImg.png";
import img3 from "../../img/projects/ticTacToeImg.png";
import img4 from "../../img/projects/frontEndChallengeImg.png";
import comingSoon from "../../img/projects/emBreveImg.png";

function Projects() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const inner = useRef();

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div id="projects" className="areaProjects item">
      <Header />
      <AlignProjects>
        <Subtitle>
          Pro<span className="red">jetos</span>
        </Subtitle>
        <Section50 className="containerProjects">
          <motion.div
            ref={carousel}
            className="carouselProjects"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              ref={inner}
              className="innerProjects"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              /* initial={{ initialize: 500}} */
            >
              <Ul>
                <Li>
                  <Card>
                    <LiImg src={img1} />
                    <LiText>
                      Desafio da Fullture Scholl. TodoList com Login e Register
                      Page.
                    </LiText>
                    <Button>View more</Button>
                  </Card>
                </Li>
                <Li>
                  <Card>
                    <LiImg src={img2} />
                    <LiText>
                      Projeto pessoal. Fazer um editor com formatação em Rich
                      Text.
                    </LiText>
                    <Button>View more</Button>
                  </Card>
                </Li>
                <Li>
                  <Card>
                    <LiImg src={img3} />
                    <LiText>
                      Desafio da OneBitCode. Fazer um jogo da velha com um
                      formulário para o nome dos jogadores.
                    </LiText>
                    <Button>View more</Button>
                  </Card>
                </Li>
                <Li>
                  <Card>
                    <LiImg src={img4} />
                    <LiText>
                      Desafio do Front-End Challenges. Reproduzir uma Home-Page
                    </LiText>
                    <Button>View more</Button>
                  </Card>
                </Li>
                <Li>
                  <Card>
                    <LiImg src={comingSoon} />
                    <LiText>
                      Projeto ainda em produção. Em breve será postado
                    </LiText>
                    <Button className="blocked">View more</Button>
                  </Card>
                </Li>
              </Ul>
            </motion.div>
          </motion.div>
        </Section50>
      </AlignProjects>
      <Footer />
    </div>
  );
}

export default Projects;
