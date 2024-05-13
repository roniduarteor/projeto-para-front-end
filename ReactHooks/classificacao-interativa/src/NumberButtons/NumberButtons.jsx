import './NumberButtons.css'

const NumberButtons = ({number, setValor}) => {
    return(
        <button className='numberButton'
        
        onClick={()=> setValor(number) }

        >{number}</button>
    )
}

export default NumberButtons