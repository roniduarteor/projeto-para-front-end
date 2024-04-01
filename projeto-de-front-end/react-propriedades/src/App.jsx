

// propriedades ou props
const Titulo = (props) => { // funciona como se fosse um lorem ipsum, pois não se sabe oq vai ter ali ainda
    return(
        <h1 style={{color: props.cor}}>{props.texto}</h1>
    )
}

const SubTitulo = ({texto, cor}) => {
    return(
        <p style={{color: cor}}>{texto}</p>
    )
}

const Cabecalho = (props) =>{
    return(
        <h1>{props.children}</h1>
    )
}

const App = () => {
    return(
        <>
        <Cabecalho>
            <p>Esse é meu cabecalho</p>
        </Cabecalho>
        <Titulo cor="blue" texto="Meu Título" />
        <SubTitulo cor="purple" texto="Esse é o subtítulo"/>
        <Titulo cor="red" texto="Meu Título" />
        <Titulo cor="green" texto="Meu Título" />
        </>
    )
}

export default App