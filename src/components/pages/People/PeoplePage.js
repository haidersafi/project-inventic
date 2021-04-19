import React,{Component} from 'react';
import {MDBIcon, MDBBtn, MDBDataTableV5 } from 'mdbreact';
import './peoplepage.css';


class PeoplePage extends Component {
    state={
        users: [{
            fullName:'ali',
            email:'ali@gmail.com',
            roll:'user'
        }
            
    ],
modal:false,
showTable:false}



    AddUser=(e)=>{
    
    
        
            
              
    console.log('add',this.state);
       

            // this.setState(prevState => ({
            //     users: [...prevState.users, {name:e.target.Name.value,email:e.target.Email.value,roll:e.target.roll.value}]
            //   }))
       
       
        }
          
       

    modal = document.getElementById("myModal");

// Get the button that opens the modal
  btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
ToggleModal =()=>{
  this.setState({modal:!this.state.modal});
  console.log('abc',this.state)
}
viewTable=(e)=>{
  e.preventDefault();
  this.setState({showTable:!this.state.showTable})
  this.setState({modal:!this.state.modal})
  console.log('state',this.state);
}

// When the user clicks on <span> (x), close the modal
// Spanonclick =()=>{
//   this.modal.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it

render(){
    return(
        <div>
          
      
          <h2>Modal Example</h2>
{console.log('inrender',this.state.modal)}
{this.state.modal?
    <div id="myModal" class="modal">

  <div class="modal-content">
    <span class="close" onClick={this.ToggleModal}>&times;</span>
    
   
  </div>

</div>:null}
{console.log(this.state,'outside ')}
<MDBBtn social="fb" color="default" onClick={this.ToggleModal}>
      <MDBIcon icon="plus"/>    Add Category
        </MDBBtn>
        <MDBBtn social="tw" className="deep-purple lighten-1">
        <MDBIcon far icon="copy" />    Import Category
        </MDBBtn>
        
         { this.state.showTable?<table>
          {console.log('inTable',this.state.showTable)}
          <th>Name</th><th>Email</th><th>Roll</th>
          {this.state.users.map((user,i)=>{
            return(<tr key={i}><td>{user.fullName}</td><td>{user.email}</td><td>{user.roll}</td></tr>)
        })}
          
          </table>:null}
        </div>
    )
}
   
}


export default PeoplePage