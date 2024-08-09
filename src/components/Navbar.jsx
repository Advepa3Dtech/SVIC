import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import svic from "../assets/logo-svic.png";
import HamburgerMenu from "./HamburgerMenu";

const Container = styled.div`
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: #f7f7fb;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  background-color: ${({ scrolled }) => (scrolled ? "#ffffff" : "#f7f7fb")};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none"};
`;

const NavbarContainer = styled.div`
  background-color: #f7f7fb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ scrolled }) => (scrolled ? "5px 20px" : "10px 20px")};
  width: 80%;
  background-color: ${({ scrolled }) => (scrolled ? "#ffffff" : "#f7f7fb")};
`;

const Logo = styled.div`
  img {
    height: ${({ scrolled }) => (scrolled ? "40px" : "60px")};
    transition: height 0.3s;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 70px;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    transition: right 0.3s ease-in-out;
    justify-content: center;
    gap: 100px;
    font-size: 30px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showHomeLinkOnly = ["/cookie-policy", "/privacy-policy"].includes(
    location.pathname
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container scrolled={scrolled}>
      <NavbarContainer scrolled={scrolled}>
        <Link to="/">
          <Logo scrolled={scrolled}>
            <img src={svic} alt="Logo" />
          </Logo>
        </Link>
        <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
        <NavLinks isOpen={menuOpen}>
          {showHomeLinkOnly ? (
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          ) : (
            <>
              <a className="anchor-links" href="#servizi" onClick={toggleMenu}>
                Servizi
              </a>
              <a
                className="anchor-links"
                href="#punti-interesse"
                onClick={toggleMenu}
              >
                Punti interesse
              </a>
            </>
          )}
        </NavLinks>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
