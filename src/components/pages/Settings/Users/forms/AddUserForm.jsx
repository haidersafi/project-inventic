import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBInput,MDBContainer, MDBBtn } from "mdbreact";


const AddUserForm = (props) => {


    const initUser = { id: null, name: '', username: '' };

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
    
        <MDBContainer>

      <MDBCol md="9" className="md-0 mb-5">
        <form>
          <MDBRow>
            <MDBCol md="6">
              <div>
                <MDBInput type="text"  label="Your name" value={user.name} name="name" onChange={handleChange} />
              </div>
            </MDBCol>
            <MDBCol md="6">
              <div >
                <MDBInput type="text"  label="Your username" value={user.username} name="username" onChange={handleChange} />
              </div>
            </MDBCol>
          </MDBRow>
          <MDBBtn color="deep-purple lighten-2" size="md" type="submit" onClick={handleSubmit}>
           Add User
          </MDBBtn>
        </form>
       
      </MDBCol>
      </MDBContainer>
        
    )
}

export default AddUserForm;