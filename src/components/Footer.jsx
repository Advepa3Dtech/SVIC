import styled from "styled-components";
import svic from "../assets/logo-svic.png";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: white;
}
`;
const FooterContainer = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 60%;
`;

const FooterText = styled.div`
  color: #555;
  font-size: 14px;
`;

const FooterLogo = styled.img`
  height: 50px;
`;

const FooterLink = styled.a`
  color: #555;
  font-size: 14px;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FooterText>Copyright © 2024 Advepa | All Rights Reserved</FooterText>
        <FooterLogo src={svic} alt="Logo" />
        <div>
          <FooterLink href="">Cookie Policy</FooterLink> |{" "}
          <FooterLink href="">Privacy Policy</FooterLink>
        </div>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
