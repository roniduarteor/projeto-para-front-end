// Organize os produtos como mostrado em aula
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
]

const App = ()=>{
  const dados = produtos


  return(
    <div>
      <h4>{dados.nome}</h4>
      <p>Preço: R${dados.preco}</p>

      <p style={{backgroundColor: dados.cores[0]}}>{dados.cores[0]}</p>
      <p style={{backgroundColor: dados.cores[1]}}>{dados.cores[1]}</p>
      <p style={{backgroundColor: dados.cores[2]}}>{dados.cores[2]}</p>
    </div>
  )
}
export default App;
