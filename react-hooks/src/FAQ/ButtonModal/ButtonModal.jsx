

const ButtonModal = ({text, setModal, modal}) => {
    return(
        <button onClick={()=> setModal(!modal)}>{text}</button>
    )
}

export default ButtonModal