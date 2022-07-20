import logo from './logo.svg';
import './App.css';
import React from 'react';

class BasicInfo extends React.Component {
  
    render(props) {
      return (
        <div className="App">
          <p>
            { props.person.name }
          </p>
          <p>
            { props.person.phone }
          </p>
          <p>
            { props.person.DOB }
          </p>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      )
    }
  }
  
  
  export default BasicInfo;
  
  