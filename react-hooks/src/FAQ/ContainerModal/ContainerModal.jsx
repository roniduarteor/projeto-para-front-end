import ButtonModal from '../ButtonModal/ButtonModal'
import Modal from '../Modal/Modal'
import React from 'react'

const ContainerModal = ({textButton, textModal}) => {
    const [modal, setModal] = React.useState(false)

    return(
    <>
     <ButtonModal 
        text={textButton}
        setModal={setModal}
        modal={modal}/>


    <Modal 
        texto={textModal}
        modal={modal}/>
    </>
)
    
}

export default ContainerModal