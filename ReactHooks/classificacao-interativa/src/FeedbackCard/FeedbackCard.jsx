import './FeedbackCard.css'
import starIcon from '../../images/icon-star.svg'
import Text from '../Text/Text'
import NumberButtons from '../NumberButtons/NumberButtons'
import Button from '../Button/Button'

const FeedbackCard = ({setEstado, setValor}) =>{

    

    return(
        <section className='container'>
        <img src={starIcon} alt="" className='imageStar'/>
        
        <Text
        title="How did we do?"
        text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        />
    
        <section className='buttons'>
        <NumberButtons
        number={1}
        setValor={setValor}
        />
        <NumberButtons
        number={2}
        setValor={setValor}
        />
        <NumberButtons
        number={3}
        setValor={setValor}
        />
        <NumberButtons
        number={4}
        setValor={setValor}
        />
        <NumberButtons
        number={5}
        setValor={setValor}
        />
        </section>
    
        <Button
        text="SUBMIT"
        setEstado={setEstado}
        />
        </section>
      )
}

export default FeedbackCard