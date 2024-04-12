import './App.css'
import estrelaImg from '../arquivosExemplo/images/icon-star.svg'

import Cards from './Cards/Cards'

import React from 'react'

const App = () => {

  return (
      <>
          <main className="conteudoPrincipal">
              <div className="cabecalho">
                  <img src={estrelaImg} alt="" />
                  <h1>FAQs</h1>
              </div>
              <div className="cards">
                  <Cards
                      titulo="What is Frontend Mentor, and how will it help me"
                      conteudo="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. it's...."
                  />

                  <hr />

                  <Cards
                      titulo="Is Frontend Mentor free?"
                      conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac diam est. Phasellus turpis nisl, pretium non lorem et, bibendum rhoncus enim. Suspendisse in placerat urna, et finibus metus. Morbi commodo blandit posuere. Nunc vestibulum porttitor mauris vitae dictum. Quisque a feugiat urna. Sed vulputate eleifend magna, non congue purus maximus sed."
                  />

                  <hr />

                  <Cards
                      titulo="Can I use Frontend Mentor projects in my portfolio?"
                      conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac diam est. Phasellus turpis nisl, pretium non lorem et, bibendum rhoncus enim. Suspendisse in placerat urna, et finibus metus. Morbi commodo blandit posuere. Nunc vestibulum porttitor mauris vitae dictum. Quisque a feugiat urna. Sed vulputate eleifend magna, non congue purus maximus sed."
                  />

                  <hr />

                  <Cards
                      titulo="How can I get help if i'm stuck on a challenge?"
                      conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac diam est. Phasellus turpis nisl, pretium non lorem et, bibendum rhoncus enim. Suspendisse in placerat urna, et finibus metus. Morbi commodo blandit posuere. Nunc vestibulum porttitor mauris vitae dictum. Quisque a feugiat urna. Sed vulputate eleifend magna, non congue purus maximus sed."
                  />

                  <hr />
              </div>
          </main>
      </>
  );
}

export default App
