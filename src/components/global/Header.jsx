/* import { useRef } from "react";
import { switchArea } from "../../pages/myPortfolio/switchArea"; */
import { Header as HeaderCss, Name, SpanName, Li, Nav, Ul } from "./headerCss";

function Header() {
/*   const anchorAbout = useRef()

  function useSwitchArea(e) {
    if(e.target === anchorAbout.current) {
      console.log("test")
      switchArea({ key: "ArrowDown" })
    }
  } */

  return (
    <HeaderCss>
      <Nav>
        <Name>
          <SpanName>{"< "}</SpanName>
          RichardP
          <SpanName>{" />"}</SpanName>
        </Name>

        <Ul>
          <Li className="nav-item">
            <span className="nav-link">Projects</span>
          </Li>
          <Li className="nav-item">
            <span className="nav-link">Index</span>
          </Li>
          <Li className="nav-item">
            <span className="nav-link">Contact</span>
          </Li>
          <Li className="nav-item">
            <span className="nav-link">About</span>
          </Li>
        </Ul>
      </Nav>
    </HeaderCss>
  );
}

export default Header