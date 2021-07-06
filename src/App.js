import axios from 'axios';
import React from 'react';
import './App.css';
import styled from 'styled-components'



export default class App extends React.Component {

state = {
  listaPokemons: [],
  imagemPokemon: ""
};

componentDidMount() {
  this.pegarListaPokemons();
}

pegarListaPokemons = () => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((resposta) =>
      this.setState({ listaPokemons: resposta.data.results })
    )
    .catch((erro) => console.log(erro));
};

pegarImagemPokemon = (nome) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    .then((resposta) => {
      this.setState({ imagemPokemon: resposta.data.sprites.front_default });
    })
    .catch((erro) => console.log(erro));
};

mudaSelect = (evento) => {
  const nomePokemon = evento.target.value;
  this.pegarImagemPokemon(nomePokemon);
};

render() {
  return (
    <div className="App">
      <h1>Pokémons</h1>
      <header></header>
      <img alt={"pokebola"} src={"https://i.servimg.com/u/f62/19/86/83/46/tm/pokeba10.gif"} ></img>
      <br></br>
      <br></br>
      <div>
        <br></br>
        <br></br>
        <select onChange={this.mudaSelect}>
          <option value={""}></option>
          {this.state.listaPokemons.map((poke) => {
            return (
              <option key={poke.name} value={poke.name}>
                {poke.name}
              </option>
            );
          })}
        </select>
      </div>
      {this.state.imagemPokemon && (
        <img alt={"imagem_pokemon"} src={this.state.imagemPokemon} />
        
      )}
      <footer>
        <br></br>
        <br></br>
        <br></br>
        <img alt={"pikachu"} src={"https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif"}></img>
      </footer>
    </div>
  );
}
}

