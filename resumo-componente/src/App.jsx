import './App.css'
import data from '../data.json'


function Score(){
  const dados = data
  let somaValores = 0
  dados.forEach((value)=>{
      somaValores+=value.score
      return somaValores
  })

  return(
    <div className='resultadoComMedia'>
      <h1>{(somaValores/4).toFixed(0)}</h1>
      <p>of 100</p>
    </div>
  )
}


function Informations(){
  const dados = data

}

function App() {
  const dados = data
  return (
    <>
      <section className='box-container'>
        <section className='results-box'>
            <p>Your Result</p>
            <Score/>
            {/* aqui coloca a média que vai vim de outro jsx */}
            <h2>Great</h2>
            <p>You scored higher than 65% of the people who have taken these tests</p>
        </section>

        <section className='summary-box'>
          <div className="name"><p>Summary</p></div>

          <div className="informations">

          </div>
        </section>
      </section>
    </>
  )
}

export default App
