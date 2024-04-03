import './App.css'
import ImagemAvatar from'../assets/images/avatar-jessica.jpeg'

const Box = () => {
  return(
    <>
    <body>
<section className='Informations'>
    <section className='box-container'>
      <div className="imagemPessoa">
        <img src={ImagemAvatar} alt="" />
      </div>

      <div className="infosPessoais">
        <div className="nome"><p>Jessica Randall</p></div>
        <div className="nacionalidade"><p>Londom, United Kingdom</p></div>
        <div className="description"><p>"Front-End developer and avid reader."</p></div>
      </div>

      <section className="buttons">
        <button><p>Github</p></button>
        <button><p>Frontend Mentor</p></button>
        <button><p>Linkedin</p></button>
        <button><p>Twitter</p></button>
        <button><p>Instagram</p></button>
      </section>

    </section>
</section>
    </body>
    </>
  )
}

const App = () =>{
  return(
    <Box/>
  )
}

export default App
