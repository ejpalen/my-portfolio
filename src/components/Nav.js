import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import imageImports from "./imageImports";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <nav>
      <div className="nav-left">
        <Link to="" className="a-link" onClick={handleLogoClick}>
          <img src={imageImports.logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-right">
        {isHome ? (
          <>
            <Link
              to="about-me-wrapper"
              spy
              smooth
              offset={-150}
              className="a-link"
            >
              About
            </Link>
            <Link to="projects-nav" spy smooth offset={-20} className="a-link">
              Projects
            </Link>
            <Link
              to="contact-me-nav"
              spy
              smooth
              offset={-20}
              className="a-link"
            >
              Contact Me
            </Link>
          </>
        ) : (
          <Link
            to="project-description"
            spy
            smooth
            offset={-120}
            className="a-link project-nav-right"
          >
            <span>Scroll Down</span>
            <span>&#8595;</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
