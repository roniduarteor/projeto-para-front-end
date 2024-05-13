import Text from "../Text/Text"
import phoneIcon from '../../images/illustration-thank-you.svg'
import "./ThanksCard.css"

const ThanksCard = ({valor}) => {
    return(
        <section className="thanksCard">

            <img src={phoneIcon} alt="" className="imagePhone"/>


        <p className="selectedValue">You selected {valor} out of 5</p>
        <div className="textDiv">
            <Text
            title="Thank you!"
            text="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get it touch!"
            />
        </div>
        </section>
    )
}

export default ThanksCard