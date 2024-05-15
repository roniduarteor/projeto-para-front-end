import styled from 'styled-components'


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 650px;
  background-color: white;
  border-radius: 10px;

   @media screen and (min-width: 800px){
    width: 850px;
    display: flex;
    flex-direction: row;
  } 
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media screen and (min-width: 800px){
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
  } 
`

export const InformationContainer = styled.section`
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media screen and (min-width: 800px){
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
  } 
`

export const ProductType = styled.p`
  font-family: Montserrat;
  letter-spacing: 6px;
  font-size: 13px;
  font-weight: 400;
  color: grey;

  @media screen and (min-width: 800px){
    font-size: 18px;
  } 
`

export const Title = styled.h1`
  font-family: Fraunces;
  font-size: 35px;
  line-height: 35px;

  @media screen and (min-width: 800px){
    font-size: 55px;
    line-height: 60px;
  } 
`

export const Text = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  color: grey;
  line-height: 28px;
  font-weight: light;

  @media screen and (min-width: 800px){
    font-size: 20px;
    line-height: 34px;
  } 
`

export const Value = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Promotion = styled.h2`
  font-family: Fraunces;
  font-size: 30px;
  color: hsl(158, 36%, 37%);
  margin-right: 20px;

  @media screen and (min-width: 800px){
    font-size: 40px;
  } 
`

export const Price = styled.p`
  color: hsl(228, 12%, 48%);
  font-weight: 400;
  font-family: Montserrat;
  text-decoration: line-through;
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 55px;
  border: none;
  background-color: hsl(158, 36%, 37%);
  border-radius: 10px;
  gap: 10px;

  cursor: pointer;

  &:hover{
    background-color: hsl(180, 36%, 37%);
  }

  @media screen and (min-width: 800px){
    height: 65px;
  }
`

export const TextButton = styled.p`
  color: white;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 15px;

  @media screen and (min-width: 800px){
    font-size: 18px;
  } 
`