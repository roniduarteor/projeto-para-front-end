// Estados 
// o estado de uma aplicação representa as características dela naquele momento

// const App = () => {

//   const ativo = true

//   return(
//     <button disabled={!ativo}>{ativo == true ? "Botão ativo" : "Botão Inativo"}
//     </button>
//   )
// }



// Hooks
// Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais.

// React.useState - É uma função que retorna um Array com 2 valores. O primeiro valor guarda o dado do estado atual, que pode ser qualquer tipo de dado como strings, arrays, números, booleans, null, undefined ou objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor. 

// Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.'

import React from 'react'

const App = ()=>{

    const [ativo, setAtivo] = React.useState(true)
    const [contar, setContar] = React.useState(0)

  return(
    <>
    <button onClick={()=> setAtivo(!ativo)}>
      {ativo ? "Botão ATIVO" : 'Botão INATIVO'}
    </button>

    <button onClick={()=> setContar(contar+1)}>{contar}</button>
     </>
  )
}

export default App