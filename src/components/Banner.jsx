import styled from "styled-components";

import imgMetaverse from "../assets/img-metaverse.png";

const ContainerBanner = styled.div`
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
  height: auto;
`;
const Banner = () => {
  return (
    <ContainerBanner>
      <Img src={imgMetaverse} alt="Banner Image" />
    </ContainerBanner>
  );
};

export default Banner;
