import '../Styles/App.css'
import {Container, Image, InformationContainer, ProductType, Title, Text, Value, Promotion, Price, Button, TextButton} from '../Styles/App.js'

import perfume from '../../images/image-product-mobile.jpg'
import cart from '../../images/icon-cart.svg'




const App = () => {
return(
<Container>

  <section>
    <Image src={perfume} alt="" />
  </section>


  <InformationContainer>

    <ProductType>PERFUME</ProductType>

    <Title>Gabrielle Essence Eau De Parfum</Title>

    <Text>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</Text>

    <Value>
      <Promotion>$149.99</Promotion>
      <Price>$169.99</Price>
    </Value>

    <Button>
    <img src={cart} alt="" />
    <TextButton>Add to Cart</TextButton>
    </Button>

  </InformationContainer>

</Container>
)
}

export default App