import React from 'react'
import data from './data.json'
import './App.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer.js';
import Post from './components/Post/Post'

function App () {
  return(
    <div className="content"> 

      <Header name="DBau" tagline="projects research snippets contact cv"/>
      <div className="container-fluid">
        <div className="row">

          <div className="col-lg-6 col-sm-12">
            <div className="callout">
              <p>Hi</p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="callout">
              <p>Hi again</p>
            </div>
          </div>

        </div>
      </div>

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