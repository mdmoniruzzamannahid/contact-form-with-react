import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/contactForm/ContactForm'

class App extends Component {

  
  render(){
    return(
      <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <h1>Get touch -</h1>
              <ContactForm />
            </div>
          </div>
      </div>
    )
  }
}

export default App;
