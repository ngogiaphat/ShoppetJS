import React, {Component} from 'react';
import './App.css';
import { Greet} from './components/Greet';
import logo from './logo.svg';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
class App extends Component {
  render() {
    return (
      <div className= "App">
        <Greet name = "Venti" heroName = "Barbatos">
          <p>This is children props</p> 
        </Greet>
        <Greet name = "Zhongli" heroName = "Morax"/>
          <button>Action</button>
        <Greet name = "Raiden Shogun" heroName = "Ei"/>
        {/* <Greet /> */}
        <Welcome name = "Venti" heroName = "Barbatos"/>
        <Welcome name = "Zhongli" heroName = "Morax"/>
        <Welcome name = "Raiden Shogun" heroName = "Ei"/>
        {/* <Hello /> */}
      </div>
    );
  }
}
export default App;