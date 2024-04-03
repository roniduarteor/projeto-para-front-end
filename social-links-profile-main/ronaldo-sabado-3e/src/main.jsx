import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
)
