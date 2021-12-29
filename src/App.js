import React, {Components} from 'react';
import './App.css';
import Profile from "./profile/Profile"


class App extends React.Component{
 state = {
     shows : false
   }
 
 toggeleShow = () =>{
  this.setState({
    shows : !this.state.shows,
  });
};
  

  render(){
   return(
    <div className='App'>
     <button onClick={this.toggeleShow}>
     {this.state.shows ?  "hide" : "show"}
     </button>
     {this.state.shows &&  <Profile/>} 
    
    </div>
   ) 
  }
  
}



export default App;

//<button onClick={this.toggel}> {this.state.shows}? 
     
//</button>
