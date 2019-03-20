import React, { Component } from 'react';
import './App.css';
import Firstsection from "./components/Firstsection"
import Secondsection from './components/Secondsection';
import Thirdsection from './components/Thirdsection';
import Navigation from './components/Navigation';
import SnowStorm from 'react-snowstorm';

class App extends Component {
  state = {
    color : "white",
    bcolor1 : "#a1c7ee",
    bcolor2 : "#8eb6e0",
  }
  ChangeTheme = () => {
    this.setState({
      color : this.state.color == "white" ? "black" : "white", 
      bcolor1 : this.state.bcolor1 == "#a1c7ee" ? "#a1eea1" : this.state.bcolor1 == "#a1eea1" ? "#e94a4a" : this.state.bcolor1 == "#e94a4a" ? "#ddca23" : "#a1c7ee",
      bcolor2 : this.state.bcolor2 == "#8eb6e0" ? "#82c55a" : this.state.bcolor2 == "#82c55a" ? "#c43434" : this.state.bcolor2 == "#c43434" ? "#b4a627" : "#8eb6e0"
    })
  }
  cc = () => {
    
  }
  render() {
    return (
      <div style = {{"color": this.state.color}}>
        <SnowStorm/>
        <Navigation onClick = {() => this.ChangeTheme()}/>
        <Firstsection bcolor = {this.state.bcolor1}/>
        <Secondsection bcolor = {this.state.bcolor2}/>
        <Thirdsection bcolor = {this.state.bcolor1} ccolor = {this.state.bcolor2}/>
      </div>
    );
  }
}

export default App;
