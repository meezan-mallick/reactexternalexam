import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Form = () => {


    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const [maritalStatus, setMaritalStatus] = useState(false)
    const [familyMembers, setFamilyMembers] = useState("");


    const handleClick = () => setMaritalStatus(!maritalStatus)
    //validations
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email) {
            return toast.warning("please fill all the fields");
        }

        else {

            console.log(firstName)
            console.log(lastName)
            console.log(email)
            console.log(gender)
            console.log(maritalStatus)
            console.log(familyMembers)
        }
    }


    return (


        <div className="container">

            <div className="row">

                <div className="col-md-6 offset-3 shadow p-4 mt-3">
                    <h1 className="display-6  text-center">Add User</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-2">
                            <input className="form-control" type="text" placeholder="First name" value={firstName} onChange={e => setfirstName(e.target.value)} />
                        </div>
                        <div className="form-group p-2">
                            <input className="form-control" type="text" placeholder="Last Name" value={lastName} onChange={e => setlastName(e.target.value)} />
                        </div>
                        <div className="form-group p-2">
                            <input className="form-control" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="dropdown">
                            <label for="cars">Gender : </label>
                            <select value={gender} onChange={e => setGender(e.target.value)} name="gender" id="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="form-check p-2">
                            <input classAName="form-check-input" type="checkbox" checked={maritalStatus} onChange={e => setMaritalStatus(e.target.checked)} id="flexCheckDefault" />
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    Marital Status
                                </label>                                    
                        </div>

                        <div className="form-group p-2">
                            <input className="form-control" type="text" placeholder="Family Member" value={familyMembers} onChange={e => setFamilyMembers(e.target.value)} />
                            {/* <button className="btn btn-primary">Add another member</button> */}
                        </div>

                        <div className="form-group p-2">
                            <input className="btn btn-primary" type="submit" value="Add" />
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Form