import styled from 'styled-components'
import '../App.css'

const Cores = {
  branco: '#fff',
  preto: '#000',
  amarelo: '#e1ce1b',
  rosa: '#e1ce'
}


const Titulo = styled.h1`
    color: rgb(100, 10, 100);
    text-align: center;
    margin-bottom: -20px;
`

const Titulo2 = styled.h1`
  color: #ffffff;
  font-size: 25px;
  text-align: center;
`

const Container = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background-color: #a801be;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`


const App = () => {
  const gengar = 'https://orig00.deviantart.net/9411/f/2015/153/f/f/094_gengar_by_rayo123000-d8vpl5g.png'

  return(
    <Container>
    <Titulo>Gengar</Titulo>
    <Titulo2>Type: phantom</Titulo2>
    <img src={gengar} alt="" />
    </Container>
  )
}

export default App