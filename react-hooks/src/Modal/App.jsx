import ButtonModal from "./ButtonModal"
import Modal from "./Modal"
import React from 'react'

const App = () => {

    const [modal, setModal] = React.useState(false) // modal ta recebendo uma propriedade, nesse caso, um valor booleano
    // setModal é uma função, com o objetivo de alterar o valor do modal quando necessário

    return(
        <>
        <ButtonModal setModal={setModal}/>
        <Modal modal={modal} setModal={setModal}/>
        </>
        
    )
}

export default App