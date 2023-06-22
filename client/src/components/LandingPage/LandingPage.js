import { useEffect } from "react";
import { Title, BigContainer, HomeLink } from "./StyledLandingPage";


const Landing = () => {
  useEffect(()=>{},[])
  return (
    <BigContainer>
      <Title>Pokemon api</Title>
      <HomeLink to="/home">Enter</HomeLink>
    </BigContainer>
  );
};

export default Landing;
