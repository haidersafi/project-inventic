
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBIcon } from 'mdbreact';
import React from 'react';

const UserTable = (props) => {
    return (

        <MDBTable responsive>
            <MDBTableHead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {props.users.length > 0 ? (
                    props.users.map(user => {
                        const { id, name, username } = user;
                        return (


                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>
                                    <MDBBtn size="sm" onClick={() => props.deleteUser(id)} social="fb" color="danger">
                                        <MDBIcon icon="trash-alt" />    Delete
                                    </MDBBtn>
                                    <MDBBtn size="sm" onClick={() => props.editUser(id, user)} social="tw" className="default">
                                        <MDBIcon far icon="edit" />    Edit
                                    </MDBBtn>
                                   
                                </td>
                            </tr>

                        )
                    })
                ) : (


                        <tr>
                            <td colSpan={4}>No users found</td>
                        </tr>


                    )
                }
            </MDBTableBody>
        </MDBTable>

    )
}

export default UserTable;