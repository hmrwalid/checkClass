import React, {Component} from "react";


class Profile extends React.Component{
     
    state ={
        person : {
            fullName : "Salah",
            bio : " footBall player in Fc liverpool",
            imgSrc : "",
            profession : "FootBall Player",
         },
         intrevall : null,
         timer : 0
    }
   
        

     componentDidMount (){
         this.setState({
             intrevall : setInterval(() => {
                 this.setState({timer : this.state.timer +1})
             }, 1000)
         })
         
     }
   

render(){
    return(
        <>
        <ul>
      <li>{this.state.person.fullName}</li>
      <li>{this.state.person.bio}</li>
      <li> <img src='./moSalah.jpg' alt ="logo" width={150}/>{this.state.person.imgSrc}</li>
      <li>{this.state.person.profession}</li>
    </ul>
        <h1>{this.state.timer}</h1>
        </>
    )
}
}

export default Profile



 
  

  