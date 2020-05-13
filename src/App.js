import React, { Component } from 'react';
import './App.css';

//Componentes:
import Conversor from './components/Conversor'

class App extends Component { 
  render() { //Aqui é onde aparece os elementos que será utilizado na tela
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
        {/*Aqui vamos usar o componente conversor*/}
        <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>{/*Real para dolar*/}
        </div>
        <div className="linha">
          <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="EUR"></Conversor>{/*Real para dolar*/}
        </div>
        <div className="linha">
          <Conversor moedaA="GBP" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="GBP"></Conversor>{/*Real para dolar*/}
        </div>
      </div>
    );
  }
}
export default App;
