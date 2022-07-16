import React, { useContext } from 'react'
import { Container, Wrapper, Number, SaveBackground , Box, Top, Bottom , Time } from './style';
import UserContext from '../../../context/UserContext';
import Save from '../../../assets/icons/save.svg'
import Oclock from '../../../assets/icons/clock.svg'

export const ToggleCard = () => {
  const { settoggleCard, usetoggleCard } = useContext(UserContext);

  console.log(usetoggleCard)



  return (

    <Container falseTrue={usetoggleCard}>
      <Wrapper>
      <Box>
        <Top>

        <Number>1234</Number>
        <SaveBackground>
          <img src={Save} />
        </SaveBackground>

        </Top>

        <Bottom>

         <img src={Oclock} />

         <Time>00:00</Time>

        </Bottom>
     
      </Box>
      <Box>two</Box>
      <Box>three</Box>
      <Box>four</Box>
      </Wrapper>
      <Wrapper>
      <Box>
        <Top>

        <Number>1234</Number>
        <SaveBackground>
          <img src={Save} />
        </SaveBackground>

        </Top>

        <Bottom>

         <img src={Oclock} />

         <Time>00:00</Time>

        </Bottom>
     
      </Box>
      <Box>two</Box>
      <Box>three</Box>
      <Box>four</Box>
      </Wrapper>
      <Wrapper>
      <Box>
        <Top>

        <Number>1234</Number>
        <SaveBackground>
          <img src={Save} />
        </SaveBackground>

        </Top>

        <Bottom>

         <img src={Oclock} />

         <Time>00:00</Time>

        </Bottom>
     
      </Box>
      <Box>two</Box>
      <Box>three</Box>
      <Box>four</Box>
      </Wrapper>
    </Container>
  )
}

export default ToggleCard;
