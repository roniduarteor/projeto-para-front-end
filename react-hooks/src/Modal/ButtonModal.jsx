

const ButtonModal = ({setModal}) => {
    return(
        <button onClick={() => setModal(true)}>Abrir Modal</button>
    ) // toda vez que eu clicar no botão o modal vai receber o valor true

    // a variável modal vai receber o valor true agora
}

export default ButtonModal