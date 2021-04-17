import React, {useState, useEffect} from 'react';
import { MDBRow, MDBCol, MDBInput,MDBContainer, MDBBtn } from "mdbreact";

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])
    
    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    }

    
    return (
       
        <MDBContainer>

      <MDBCol md="9" className="md-0 mb-5">
        <form>
          <MDBRow>
            <MDBCol md="6">
              <div>
                <MDBInput type="text"  label="Your name"  value={user.name} name="name" onChange={handleChange}  />
              </div>
            </MDBCol>
            <MDBCol md="6">
              <div >
                <MDBInput type="text"  label="Your username" value={user.username} name="username" onChange={handleChange} />
              </div>
            </MDBCol>
          </MDBRow>
          <MDBBtn color="deep-purple lighten-2" size="md" type="submit" onClick={handleSubmit}>
          Edit User
          </MDBBtn>
          <MDBBtn color="grey" size="md" type="submit" onClick={() => props.setEditing(false)}>
          Cancel
          </MDBBtn>
        </form>
      </MDBCol>
      </MDBContainer>
    )

}

export default EditUserForm;