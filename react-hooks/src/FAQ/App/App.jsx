import React from 'react'
import ButtonModal from '../ButtonModal/ButtonModal'
import Container from '../Container/Container'
import ContainerModal from '../ContainerModal/ContainerModal'
import Modal from '../Modal/Modal'

import './App.css'

const App = () => {
    
    return(
        <Container>
            <ContainerModal
            textButton={"Você possui alguma dúvida sobre o nosso FAQ?"}
            textModal={"As dúvidas sobre o nosso FAQ pode ser resolvidas dentro do nosso fórum"}/>
            <ContainerModal/>
            <ContainerModal/>
        </Container>
    )
}

export default App