import { Link, Route, Routes } from "react-router-dom";
import "../assets/styles/Nav.css";
import Contact from "./Contact";
import Projects from "./Projects";
import git from "../assets/images/git hub icon.png";
import ig from "../assets/images/ig icon.png";
import linkedIn from "../assets/images/linked in icon.png";

function Nav() {
  //using regular anchor tags for external links to profiles as doing so with react Links not possible
  //initial idea:
  {
    /* <li>
{
  <Link to="https://github.com/samuel2l">
    <img src={git} alt="git-icon" target="blank" />
  </Link>
}
</li> */
  }

  return (
    <header>
      <nav>
        <ul>
        <li>
            <a
              href="https://github.com/samuel2l"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={git} alt="git-icon" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/samuel2l"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="git-icon" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/sam-adams-6baa20289/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ig} alt="git-icon" />
            </a>
          </li>

        </ul>
        <ul className="right">
          <li>{<Link to="/projects">Projects</Link>}</li>
          <li>{<Link to="/contact">Contact me</Link>}</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </header>
  );
}

export default Nav;
