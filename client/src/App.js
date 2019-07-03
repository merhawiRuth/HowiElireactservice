import React, {Component} from 'react';
import logo from './logo.svg';
import * as consume from 'elifetchmodes6';
import './App.css';

class App extends Component {

  state = {

  }

  componentDidMount(){

    const object = {
      method: "POST",
      url: 'http://localhost:3005/data',
      data:{name: 'im a barkkk9iinkkowl', value:"hide in a tree"}
    }

    consume.fetch(object).then( res => {
      console.log(res.data);
    }).catch(err => {
        console.log(err);
    })  
  
  }


  render(){

    return (
      <div className="App">
        <h1>Welcome</h1>
      </div>
    )

  }
 ;
}

export default App;
