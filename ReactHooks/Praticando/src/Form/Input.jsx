import React from 'react'
import "./Input.css"

const Input = ({tipo, textName}) => {

    const [nome, setNome] = React.useState('')

    function  clickSubmit(event){
        event.preventDefault()
    }

    return(
        <form onSubmit={clickSubmit}>
            <label htmlFor={textName}>{textName}</label>
            <input 
            type={tipo} 
            id={textName}
            value={nome}
            onChange={({target})=> setNome(target.value)}
            />

           <p>{nome}</p>
        </form>
    )
}

export default Input


// Crie campos de formulário reativos que exibam:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado. Exiba os dados sempre que uma mudança for feita, por exemplo: <p>{DADO}</p>