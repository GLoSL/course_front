//TOUT CE QUI EST ENTRE {} DANS REACT CORRESPOND A DU CODE JS

import React, { Component } from 'react'; //importe Component de base de react et react
import logo from './logo.svg'; // définition de la variable logo
import './App.css';
import Button from './components/button' ; // import du component Button
import {textButton} from './test.js'; // import de la variable textButton

class App extends Component { //création d'une classe App dérivée de Component

  majState = () => {
    console.log ("Je suis là !!!");
  }
  render() {
    return (
      <div className="App">{/* className est équivalent à class, utilisé ici car on mélange html et js (et class existe déjà en js ex: ligne 5); commentaire en js entre accolades */}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> {/*{logo}: insertion de la variable logo importée plus haut*/}
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button text={textButton} onClick={this.majState}/>{/*on affiche le component Button dans le DOM virtuel, on lui assigne une props text qui a comme valeur la varibale textButton*/}
        {/*quand on clique sur le bouton la fonction majState est appelée*/}
      </div>
    );
  }
}

export default App;
