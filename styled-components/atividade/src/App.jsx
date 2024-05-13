import styled from 'styled-components'
import './index.css'

const Color = {
    verde: 'hsl(71, 73%, 54%)',
    azulCiano: 'hsl(179, 62%, 43%)',
    cinza: 'hsl(204, 43%, 93%)',
    cinzaEscuro: 'hsl(218, 22%, 67%)'
}

const Container = styled.section`
    width: 600px;
    height: 370px;
    background-color: white;
`

const FirstContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 30px;
`

const TituloPrincipal = styled.h1`
  color: ${Color.azulCiano};
`
const Subtitulo = styled.h1`
  color: ${Color.verde};
`

const TextoCinza = styled.p`
  color: ${Color.cinzaEscuro};
  font-weight: 500;
`

const TextoPreco = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: white;
`

const SecondContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`
const ContainerPrice = styled.section`
    width: 50%;
    height: 185px;
    background-color: ${Color.azulCiano};
    padding: 30px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

const ContainerInfos = styled.section`
    width: 50%;
    height: 185px;
    background-color: hsl(178.59375, 52.032520325203244%, 51.76470588235295%);
    padding: 30px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TitlePrice = styled.h2`
    font-size: 15px;
`

const Price = styled.p`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const Button = styled.button`
    border: none;
    border-radius: 8px;
    background-color: ${Color.verde};
    width: 240px;
    height: 50px;
    color: white;
    font-weight: 700;
    font-size: 16px;
`

const TextoInfos = styled.p`
  font-size: 16px;
`

const App = () => {
  return(
    <Container>

      <FirstContainer>

        <TituloPrincipal>Join our community</TituloPrincipal>
        <Subtitulo>30-day, hassle-free money back guarantee</Subtitulo>
        <TextoCinza>Gain acess to our full library of tutorials along with expert code reviews. Perfect for any developers who are serioues about joning their skills.</TextoCinza>

      </FirstContainer>

      <SecondContainer>
        <ContainerPrice>
          <TitlePrice>Monthly Subscription</TitlePrice>

          <Price> 
          <TextoPreco>$29</TextoPreco> 
          <TextoCinza>per month</TextoCinza>
          </Price>
          

          <TitlePrice>Full access for less than $1 a day</TitlePrice>

          <Button>Sign Up</Button>
        </ContainerPrice>

        <ContainerInfos>
          <h2>Why Us</h2>
          <TextoInfos>Tutorials by insdustry experts Peer & expert code review Coding exercises Acess to our Github repos Community forum FlashCards decks New vídeos every week</TextoInfos>
        </ContainerInfos>
      </SecondContainer>
    </Container>
  )
}

export default App