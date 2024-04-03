import './Main.css'

import img01 from './img/1.jfif'
import img02 from './img/2.jfif'
import img03 from './img/3.jfif'
import img04 from './img/4.jfif'
import img05 from './img/5.jfif'
import img06 from './img/6.jfif'
import img07 from './img/7.jfif'
import img08 from './img/8.jfif'
import img09 from './img/9.jfif'
import img10 from './img/10.jfif'
import img11 from './img/11.jfif'
import img12 from './img/12.jfif'

const Main = ()=>{
    return(
    <main>
        <div className='imagens-container'>

            <div className='three-imagens'>
            <img src= {img01} alt="" className='imagepe'/>
            <img src={img02} alt="" className='imagepe'/>
            <img src={img03} alt="" className='imagepe'/>
            </div>

            <div className='two-imagens'>
            <img src={img04} alt="" className='imagequadrada'/>
            <img src={img05} alt="" className='imagequadrada'/>
            </div>

            <div className='one-imagem'>
            <img src={img06} alt="" className='imagedeitada'/>
            </div>

            {/* segunda parte */}

            <div className='three-imagens'>
            <img src={img07} alt="" className='imagepe'/>
            <img src={img08} alt="" className='imagepe'/>
            <img src={img09} alt="" className='imagepe'/>
            </div>

            <div className='two-imagens'>
            <img src={img10} alt="" className='imagequadrada'/>
            <img src={img11} alt="" className='imagequadrada'/>
            </div>


            <div className='one-imagem'>
            <img src={img12} alt="" className='imagedeitada'/>
            </div>
        </div>
    </main>
    )
}

export default Main; 