import styled from "styled-components";

const Container = styled.div`
  width: 101%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const ContainerIframe = styled.div`
  width: 95%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 98%;
  border: none;
  border-radius: 20px;
`;

const Land = () => {
  return (
    <Container>
      <ContainerIframe>
        <Iframe src="https://svic.ch/prod/site/land/index.html" />
      </ContainerIframe>
    </Container>
  );
};

export default Land;
