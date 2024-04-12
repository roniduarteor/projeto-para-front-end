import Button from './Button'
import iconeMenos from '../../arquivosExemplo/images/icon-minus.svg'
import iconeMais from '../../arquivosExemplo/images/icon-plus.svg'
import './Cards.css'
import React from 'react'

const Cards = ({ titulo, modal, conteudo, setModal }) => {
    [modal, setModal] = React.useState(false)
    return (
        <>  <div className="cabecalhoCards">
            <p>{titulo}</p>

            <Button icone={modal ? iconeMenos : iconeMais} modal={modal} setModal={setModal} />
            
            </div>

            <div className="conteudo">
            {modal && <div><p>{conteudo}</p></div>}
            </div>
        </>
    );

    // se modal for true (que é pra exibir) ele vai mostrar o {conteudo}, mas se for false, ele só vai ignorar aquilo ali

    // o && serve pra avaliar se oq está a direita vai aparecer ou não dependendo do que o modal é (true ou false) --> aprendi com o chatGPT essa
}

export default Cards;