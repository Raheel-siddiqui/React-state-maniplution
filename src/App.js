import React, {Component} from "react";
import './App.css';
// import Clicker from "./Clicker"
import Statemaniplating from "./Statemaniplating";

export default class App extends Component{
state = {
    person: [
      {name: "raheel siddiqui" , age: 24},
      {name: "Tabish Khan" , age: 23},
      {name: "Hammad Khan" , age: 22}
    ]
}

  changehandler = () =>{

    const addinfo = {name: "Salman" , age: 18}
    let addUser = [...this.state.person, addinfo];
    this.setState({
      person : addUser
    })

  }
  render(){

    return(
      <div className="App">
        <button onClick={this.changehandler}>Switch Name</button>
      {this.state.person.map((person , index) => <Statemaniplating name={person.name} age={person.age}/>)}
      </div>
      
    );
  }
}
