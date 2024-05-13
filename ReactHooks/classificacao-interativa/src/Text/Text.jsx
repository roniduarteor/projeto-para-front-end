import './Text.css'

const Text = ({title, text}) => {
    return(
        <>
        <section className='textos'>
        <h1>{title}</h1>
        <p>{text}</p>
        </section>
        </>
    )
}

export default Text