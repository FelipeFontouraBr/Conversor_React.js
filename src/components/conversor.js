import React, { Component } from 'react'


export default class Conversor extends Component {

    //Construtor com as propriedades, após isso, conseguimos acessar as propriedades que vem do App.js
    constructor(props) {
        super(props);

    //Para converter moedaA para B, precisa armazenar em algum lugar. Armezenamos no estado do componente:
        this.state = { //isso é um objeto
            moedaA_valor:"",//O valor vira do valor que será digitado no campo
            moedaB_valor: 0,//O valor da moedaB vai ser o valor calculado depois que clicarmos para converter 
        }
        this.converter = this.converter.bind(this);//bind (pode passar algum objeto dentro, o objeto que passar, ele vai ser o this dentro da function) 
    }
    //Método que vai converter da moedaA para B:
    converter(){ //ele é um método, por isso (){}
        
        //vamos definir qual será a conversão de qual moeda
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=y&apiKey=63566804ce5129e31be8`//URL que vamos utilizar aqui

        fetch(url)//vamos acessar a URL e pegar o valor convertido
            .then(res =>{
                
                return res.json()//vou pegar o resultado e converter para json
            })
            .then(json => {//quando acabar de converter
                let cotacao = json[de_para].val;//vou pegar minha cotação
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2) //Fixed só quero 2 casas decimais
                this.setState({ moedaB_valor })
            })
    }

    render() { 
        return ( //Todos componentes deve retornar apenas uma div, e todos meus elementos deve estar dentro dessa div
            <div className="conversor"> {/*Componente conversor*/}
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>{/*Por estar dentro de uma classe, colocar this*/}
                <input type="text" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}}></input>{/*Valor que vamos converter / onChange receberá uma function e vai atualizar o estado sempre que o campo mudar / Explicação: event.target = onChange irá disparar um evento, esse evento irá pegar quem é o target (nesse caso, será o ELEMENTO INPUT) e o valor que estiver dentro dele é o que nós queremos*/}
                <input type="button" value="Converter" onClick={this.converter}></input>{/*onClick irá chamar a função converter*/}
                <h2>{this.state.moedaB_valor}</h2>{/*Aqui irá receber o estado da moeda B */}

            </div>
        )
    }
}