import React, { useState } from "react";
import { useSelector } from "react-redux";

const Table = () => {

    const users = useSelector((state) => state);
    return (
        <div className="container mt-4 pt-3 ">
            <table className="table table-dark table-striped">
                <thead>
                    
                    <tr>

                        <td scope="col">First Name</td>
                        <td scope="col">Last Name</td>
                        <td scope="col">Email</td>
                        <td scope="col">Gender</td>
                        <td scope="col">Marital Status</td>
                        <td scope="col">Family Members</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr >
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.maritialStatustext}</td>
                            <td>
                                {
                                    user.familyMembers.map((familyMember) => (
                                        familyMember.firstName +" "+ familyMember.lastName + ",  "
                                    ))
                                }
                            </td>

                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table