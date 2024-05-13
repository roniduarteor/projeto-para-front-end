import './App.css'
import React from 'react'
import FeedbackCard from './FeedbackCard/FeedbackCard'
import ThanksCard from './ThanksCard/ThanksCard'

const App = () => {

  const [estado, setEstado] = React.useState(true)

  const [valor, setValor] = React.useState(0)

  if(estado){
  return(
  <FeedbackCard
  setEstado={setEstado}
  setValor={setValor}
  />
  )
  }else{
    return(
      <ThanksCard
      valor={valor}
      />
    )
  }


  
    

}

export default App
