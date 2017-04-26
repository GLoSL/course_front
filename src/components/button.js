import React, {Component} from 'react';


class Button extends Component {

  state = {
    text: this.props.text
  }

  componentWillReceiveProps (nextProps) {
    this.setState({text: nextProps.text})
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
