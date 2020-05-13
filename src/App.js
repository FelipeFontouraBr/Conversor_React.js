import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  render() { //Aqui é onde aparece os elementos que será utilizado na tela
    return (
      <div className="App">
        <Conversor //Aqui vamos usar o componente conversor
        moedaA="USD"
        moedaB="BRL"
        ></Conversor>
      </div>
    );
  }
}
export default App;
