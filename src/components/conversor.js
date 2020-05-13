import React, { Component } from 'react'


export default class Conversor extends Component {
    render() { 
        return ( //Todos componentes deve retornar apenas uma div, e todos meus elementos deve estar dentro dessa div
            <div className="conversor"> {/*Componente conversor*/}
                <h2>USD para BRL</h2>
                <input type="text"></input>{/*Valor que vamos converter*/}
                <input type="button" value="Converter"></input>
                <h2>Valor convertido</h2>

            </div>
        )
    }
}