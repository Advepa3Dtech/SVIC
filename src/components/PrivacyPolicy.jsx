import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  text-align: left;
  background-color: #f7f7fb;
  color: #1d1e4b;
  width: 100%;
  height: 70vh;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
    </Container>
  );
};

export default PrivacyPolicy;
