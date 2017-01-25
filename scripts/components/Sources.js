import React, { Component } from 'react';
//import logo from './logo.svg';
//import './Source.css';

class Sources extends Component {
  constructor(props) {
    super(props);
    this.listItems = props.items.map((item) =>
      <option key={item.toString()}>
        {item}
      </option>
    );
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <select id='sources'>
          {this.listItems}
        </select>
        <button id='magic_button'>Show selected news.</button>
      </div>
    );
  }
}

export default Sources;