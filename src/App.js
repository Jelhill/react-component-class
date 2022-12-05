import './App.css';
// import Login from "./Login"

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to React</h1>
//       Name<input type="text" />
//       <Login   />
//     </div>
//   );
// }

import React, { Component } from 'react';
import Form from './Components/Form/Form';
// import Form from './Form';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      count: 0,
      favFood: "Rice",
      jsonPlaceHolderRecord: []

    }
  }
  
  componentDidMount() {
    this.handleApiCall()
  }
  
  handleIncrement = () => {
    let favoriteFood = ""
    if(this.state.count % 2 === 0) {
      favoriteFood = "Beans"
    }else {
      favoriteFood = "Rice"
    }

    this.setState({
      count: this.state.count + 1,
      favFood: favoriteFood
    })
    console.log('increase state updated')
  }

  handleDecrement = () => {
    console.log('decreaing function ran')
    this.setState({
      count: this.state.count - 1
    })
  }

  handleClear = () => {
    this.setState({
      jsonPlaceHolderRecord: []
    })
  }

  handleApiCall = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(jsonResponse => {
      this.setState({
        jsonPlaceHolderRecord: jsonResponse
      })
    })
  }

  render() {
    return (  
      <div className='App'>
        <h1>{this.state.count}</h1>
        <h1>{this.state.favFood}</h1>
         <button onClick={this.handleIncrement}>Increment</button>
         <button onClick={this.handleDecrement}>Decrement</button><br /> <br />
         <button onClick={this.handleApiCall}>Fecth Records from JsonPlaceholder</button>
         <button onClick={this.handleClear}>Clear</button>
         <div>{this.state.jsonPlaceHolderRecord.map((item, i) => {
            return <p>{`${item.userId} ${item.title}`}</p>
         })}</div>
         <Form />
      </div>
    );
  }
}

export default App;
