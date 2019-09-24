import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';
import LeftBottomBox from './components/LeftBottomBox/LeftBottomBox.js';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      showTask2: false
    }
  }

  /* Task 2 */
  task2 = () => {
    let originalArray = [3,5,1,9,2,6,7,4];
    let filteredArr = this.getNumbers(originalArray);
    console.log(filteredArr);
    let multipliedArr = this.multiplyNumbers(filteredArr);
    console.log(multipliedArr);
    console.log(this.sumNumbers(multipliedArr));
  }

  /*Task 2 - returns values between 4 and 8 */
  getNumbers = (array) => {
      return array.filter(value => value>4 && value<8);
  }

  /*Task 2 - multiplies values in array by 10 */
  multiplyNumbers = (array) => {
    return array.map(value => {
      return value * 10;
    });
  }

  /*Task 2 - sums values in array */
  sumNumbers = (array) => {
    return array.reduce((accumulator, value) =>{
      return accumulator + value;
    }, 0);
  }


  onClickHandler = () => {
    alert("click only on inner div");
  }

  render(){

    let content = this.state.showTask2 ? this.task2() : (
      <div className="outer" onClick={this.onClickHandler}>
        <div className="center"/>
        <LeftBottomBox />
        <div className="row">
            <div className="box float-box"/>
            <div className="box float-box"/>
            <div className="box float-box"/>
        </div>
        <div className="new-row box"/>
        <div className="absolute-center box"/>
      </div>
    );
  //  this.task2();

    return (
      <HashRouter>
          <Link to="/" onClick={()=> {this.setState({showTask2: false});}}>Task 1</Link>
          <br/>
          <Link to="/" onClick={()=> {this.setState({showTask2: true}); alert("open console to see task 2");}}>Task 2</Link>
          {content}
      </HashRouter>
    );
  }

}

export default App;
