import './Button.css'

const Button = ({text, setEstado}) => {
    return(
        <button className='submitButton'
        
        onClick={() => setEstado(false)}
        
        >{text}</button>
    )
}

export default Button