import React, { Component } from 'react'


export default class Conversor extends Component {

    //Construtor com as propriedades, após isso, conseguimos acessar as propriedades que vem do App.js
    constructor(props) {
        super(props);

    //Para converter moedaA para B, precisa armazenar em algum lugar. Armezenamos no estado do componente:
        this.state = { //isso é um objeto
            moedaA_valor:"",
            moedaB_valor: 0,
        }

    }

    render() { 
        return ( //Todos componentes deve retornar apenas uma div, e todos meus elementos deve estar dentro dessa div
            <div className="conversor"> {/*Componente conversor*/}
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>{/*Por estar dentro de uma classe, colocar this*/}
                <input type="text"></input>{/*Valor que vamos converter*/}
                <input type="button" value="Converter"></input>
                <h2>Valor convertido</h2>

            </div>
        )
    }
}