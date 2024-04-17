import SectionCar from "./SectionCar/SectionCar"
import './App.css'

import sedanImg from "../images/icon-sedans.svg"
import suvImg from "../images/icon-suvs.svg"
import luxuryImg from "../images/icon-luxury.svg"

const App = () => {
  return(
    <section>
    <SectionCar
    color="hsl(31, 77%, 52%)"
    image={sedanImg}
    titulo="SEDANS"
    texto="Choose a sedan for its affodability and excellent fuel economy. Idal for cruising in the city or on your next road trip."
    />

    <SectionCar
    color="hsl(184, 100%, 22%)"
    image={suvImg}
    titulo="SUV"
    texto="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
    />

    <SectionCar
    color="hsl(179, 100%, 13%)"
    image={luxuryImg}
    titulo="LUXURY"
    texto="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
    />
    </section>
  )
}

export default App;