import styled from "styled-components";
import svic from "../assets/logo-svic.png";
import { useState, useEffect } from "react";

const Container = styled.div`
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: #f7f7fb;
  width: 101%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
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
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container scrolled={scrolled}>
      <NavbarContainer scrolled={scrolled}>
        <Logo scrolled={scrolled}>
          <img src={svic} alt="Logo" style={{ height: "60px" }} />
        </Logo>
        <NavLinks>
          <NavLink href="#servizi">Servizi</NavLink>
          <NavLink href="#punti-interesse">Punti interesse</NavLink>
        </NavLinks>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
