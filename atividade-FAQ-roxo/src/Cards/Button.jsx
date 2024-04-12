
const Button = ({ icone, modal, setModal }) => {
    // !modal -> se modal for true, vai se tornar false, e vice-versa, pq aí sim vai ficar trocando qunado clicar, sem a necessidade de um outro botão só para fehcar
    return (
        <button onClick={() => setModal(!modal)}> 
            <img src={icone} alt="" />
        </button>
    );
}

export default Button