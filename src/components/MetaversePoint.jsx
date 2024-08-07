import styled from "styled-components";

// Percorsi delle immagini
import edificioPrivato from "../assets/edificio-privato.png"; // Sostituisci con il percorso dell'immagine reale
import labSole from "../assets/lab-sole.png"; // Sostituisci con il percorso dell'immagine reale
import infopoint from "../assets/info.png"; // Sostituisci con il percorso dell'immagine reale

const Container = styled.div`
  background-color: #f7f7fb;
  padding: 40px 20px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerPoints = styled.div`
  background-color: #f7f7fb;
  padding: 40px 20px;
  text-align: center;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #1d1e4b;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

const PointsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const PointItem = styled.div`
  max-width: 300px;
  text-align: left;
`;

const PointImage = styled.img`
  width: 100%;
  margin-top: -20px;
  z-index: 1;
`;

const PointTitle = styled.h3`
  color: #1d1e4b;
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0 5px;
`;

const MetaversePoints = () => {
  return (
    <Container id="punti-interesse">
      <ContainerPoints>
        <Title>Scopri i Punti d interesse del Metaverso</Title>
        <Description>
          All interno del metaverso, troverai una vasta gamma di punti d
          interesse che offrono esperienze straordinarie e coinvolgenti. C è
          qualcosa di affascinante per ogni tipo di avventuriero digitale.
        </Description>
        <PointsContainer>
          <PointItem>
            <PointImage src={edificioPrivato} alt="Edificio privato" />
            <PointTitle>Edificio privato</PointTitle>
          </PointItem>
          <PointItem>
            <PointImage src={labSole} alt="Laboratorio del sole" />
            <PointTitle>Laboratorio del sole</PointTitle>
          </PointItem>
          <PointItem>
            <PointImage src={infopoint} alt="Infopoint" />
            <PointTitle>Infopoint</PointTitle>
          </PointItem>
        </PointsContainer>
      </ContainerPoints>
    </Container>
  );
};

export default MetaversePoints;
