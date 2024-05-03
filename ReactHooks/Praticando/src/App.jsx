import Input from "./Form/Input"
import './App.css'


const App = () => {
  return(
    <form>

    <Input
    textName="Nome"
    tipo="text"
    />

    <Input
    textName="Email"
    tipo="email"
    /> 

    <Input
    textName="Senha"
    tipo="password"
    />

    <Input
    textName="CEP"
    tipo="number"
    />

    <Input
    textName="Rua"
    tipo="text"
    />

    <Input
    textName="Numero"
    tipo="number"
    />

    <Input
    textName="Bairro"
    tipo="text"
    />

    <Input
    textName="Cidade"
    tipo="text"
    />

    <Input
    textName="Estado"
    tipo="text"
    />

    </form>
  )
}
// Crie campos de formulário reativos que exibam:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado. Exiba os dados sempre que uma mudança for feita, por exemplo: <p>{DADO}</p>



export default App