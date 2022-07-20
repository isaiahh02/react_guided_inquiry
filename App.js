import logo from './logo.svg';
import './App.css';
import React from 'react';
import BasicInfo from './BasicInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Isaiah Foster',
        phone: '980-298-2102',
        DOB: '2/19/2002'
      }
    }
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <BasicInfo props = {this.state.person} />
    )
  }
}


export default App;

