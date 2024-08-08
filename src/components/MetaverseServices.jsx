// src/components/MetaverseServices.js
import styled from "styled-components";
import emptyWallet from "../assets/empty-wallet-time.png";
import documentText from "../assets/document-text.png";
import cards from "../assets/cards.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 213px;
  padding-right: 213px;
  background-color: #f7f7fb;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const TextSection = styled.div`
  max-width: 50%;
`;

const Title = styled.h2`
  color: #1d1e4b;
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.h3`
  color: #0703ff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.5;
`;

const ServicesList = styled.div`
  max-width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 20px;
  align-items: center;
`;

const ContainerIcon = styled.div`
  background-color: blue;
  border-radius: 10px;
  width: 40px !important;
  height: 40px !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box; // Aggiunto per includere padding e border
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 0px 20px 0px 20px;
`;

const ServiceText = styled.div`
  margin-left: 15px;
  h4 {
    margin: 0;
    color: #1d1e4b;
    font-size: 16px;
    font-weight: bold;
  }
  p {
    margin: 5px 0 0;
    color: #555;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const MetaverseServices = () => {
  return (
    <Container id="servizi">
      <TextSection>
        <Subtitle>UN UNIVERSO DIGITALE DI INFINITE POSSIBILITÀ</Subtitle>
        <Title>Esplorando i servizi del Metaverso</Title>
        <Description>
          Immagina un universo digitale interconnesso e vibrante, dove milioni
          di utenti provenienti da tutto il mondo si incontrano, socializzano e
          creano esperienze uniche. Nel metaverso, puoi esplorare ambienti
          virtuali mozzafiato, progettare e personalizzare il tuo spazio
          digitale, partecipare a eventi emozionanti e interagire con altri
          attraverso avatar personalizzati.
        </Description>
      </TextSection>
      <ServicesList>
        <ServiceItem>
          <ContainerIcon>
            <Icon
              className="iconServices"
              src={emptyWallet}
              alt="Ambienti virtuali personalizzabili"
            />
          </ContainerIcon>
          <ServiceText>
            <h4>Ambienti virtuali personalizzabili</h4>
            <p>
              Consente agli utenti di creare e personalizzare i propri spazi
              virtuali all'interno del metaverso.
            </p>
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ContainerIcon>
            <Icon
              className="iconServices"
              src={documentText}
              alt="Socializzazione e intrattenimento"
            />
          </ContainerIcon>
          <ServiceText>
            <h4>Socializzazione e intrattenimento</h4>
            <p>
              Il servizio di socializzazione e intrattenimento include varie
              attività come eventi virtuali, concerti, spettacoli.
            </p>
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <ContainerIcon>
            <Icon
              className="iconServices"
              src={cards}
              alt="Economia virtuale"
            />
          </ContainerIcon>
          <ServiceText>
            <h4>Economia virtuale</h4>
            <p>
              Un'economia virtuale consente agli utenti di comprare, vendere e
              scambiare beni e servizi all'interno del metaverso.
            </p>
          </ServiceText>
        </ServiceItem>
      </ServicesList>
    </Container>
  );
};

export default MetaverseServices;
