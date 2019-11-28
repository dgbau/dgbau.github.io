import React from 'react'
import data from './data.json'
import './App.scss'
import Header from './components/header/Header'

import Footer from './components/footer/Footer.js';

function Post({ title, body, id}) {
  return (
    <div className="post">
      <h4>{title}</h4> - {body}
    </div>
  );
}

function App () {
  return(
    <div className="container"> 
      <Header name="DBau" tagline="// projects, research and assorted snippets"/>
      <div className="posts">
        {data.map((datum, i) => (
          <Post key={i} {...datum}/>
        ))}
      </div>
      <Footer name="David G Bau" tagline="c'est la vie"/>
    </div>
  )
  

}

export default App