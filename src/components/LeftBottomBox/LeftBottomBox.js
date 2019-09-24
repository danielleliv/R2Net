import React, {Component} from 'react';
import  './LeftBottomBox.css';


class LeftBottomBox extends Component{

  constructor(props){
    super(props);

    this.state = {
      cssClass: "leftBottom",
      moved: false
    }
  }

  onLeftBottomClicked = (e) => {
    e.stopPropagation();
    
    let classes = ["leftBottom"];
    let newClass = this.state.moved ? classes[0] : [...classes, "moved"].join(" ") ;
    this.setState((prevState,props) => ({
                                          cssClass: newClass,
                                          moved: !prevState.moved
                                        }));
  }

  render(){
    return (
        <div className={this.state.cssClass} onClick={this.onLeftBottomClicked}/>
    );
  }
}

export default LeftBottomBox;
