import styled from "styled-components";

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 25px;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: black;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <HamburgerIcon onClick={toggleMenu}>
      <div style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }} />
      <div
        style={{
          opacity: isOpen ? "0" : "1",
          transform: isOpen ? "translateX(20px)" : "translateX(0)",
        }}
      />
      <div style={{ transform: isOpen ? "rotate(-45deg)" : "rotate(0)" }} />
    </HamburgerIcon>
  );
};

export default HamburgerMenu;
