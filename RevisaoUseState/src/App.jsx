// o estado de uma aplicação representa as características dela naquele momento
import React from 'react'
import './App.css'

const App = () => {

  const [contar, setContar] = React.useState(0)

  function crescente(){
    setContar(contar + 1)
  }
  function decrescente(){
    setContar(contar - 1)
  }

  return(
    <>
  <body>
    
  
    <button onClick={decrescente}>
      -
    </button>
    <p>
      {contar}
    </p>
    <button onClick={crescente}>
      +
    </button>
</body>
    </>
  )
}

export default App;