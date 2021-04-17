//  CRUD users app.js

import React, { useState } from 'react'
import userList from './data.js';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";


const UsersPage = () => {
    


    const [users, setUsers] = useState(userList);

    const addUser = user => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    }

    const deleteUser = id => setUsers(users.filter(user => user.id !== id));

    const [editing, setEditing] = useState(false);

    const initialUser = { id: null, name: '', username: '' };

    const [currentUser, setCurrentUser] = useState(initialUser);

    const editUser = (id, user) => {
        setEditing(true);
        setCurrentUser(user);
    }
    const updateUser = (newUser) => {
        setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))
    }


    return (
        <div >
            <MDBCard className="h1-responsive text-center" style={{ width: '95%' }}>
                <MDBRow>
                  
                    <MDBCol>
                        <MDBCardBody className="form">
                            <h3 className="mt-2">
                                <MDBIcon icon="users" className="pr-2" />
               USERS
              </h3>

                            <MDBBtn social="fb" className="mt-4" style={{ float: 'right' }} color="default">
                                <MDBIcon icon="plus" /> Add User
        </MDBBtn>
                            <br />
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            <div className="row">
                <div >
                    {editing ? (
                        <MDBCard className="h1-responsive text-center" style={{ width: '100%', margin: '4%' }}>
                            <MDBRow>
                                <MDBCol>
                                    <MDBCardBody >
                                        <h2>Edit User</h2>
                                        <EditUserForm
                                            currentUser={currentUser}
                                            setEditing={setEditing}
                                            updateUser={updateUser}
                                        />
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>

                        
                    ) : (
                            <MDBCard className="h1-responsive align-middle" style={{ width: '100%', margin: '4%'}}>
                                <MDBRow >
                                    <MDBCol>
                                        <MDBCardBody >
                                            <h2 className="text-center">Add User</h2>
                                            <AddUserForm addUser={addUser} />
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                           
                        )}
                </div>

                <MDBCard className="h1-responsive text-center" style={{ width: '90%', margin: '2%' }}>
                    <MDBRow>
                        
                        <MDBCol>
                            <MDBCardBody >

                                <h2>Users List</h2>

                                <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />



                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </div>
        </div>
    )
}

export default UsersPage;