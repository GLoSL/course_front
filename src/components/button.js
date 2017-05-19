//CREATION D'UN COMPONENT
//

import React, {Component} from 'react';

class Button extends Component {

  state = {
    text: this.props.text
  }
  /*le state permet de stocker les données de la classe, on l'utilise en interne tandis que les props peuvent venir d'un fichier interne*/

  componentWillReceiveProps (nextProps) {
    this.setState({text: nextProps.text})
  }


  editText = () => {
    return "je rajoute ça" + this.state.text;
  }


  leClick = (event) => {
    console.log("Ce que contient le bouton : " + event.target.innerText);
    const num = this.text;
  }

  render() {
    return (
      <button>{this.props.text}</button>
    );
  }
}
export default Button;
