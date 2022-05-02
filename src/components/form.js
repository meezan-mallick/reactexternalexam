import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Table from "./table";

const Form = () => {


    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const [maritialStatus, setmaritialStatus] = useState("")
    const [familyMembers, setfamilyMembers] = useState([{ firstName: '', lastName: '' }]);

    const users = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...familyMembers];
        list[index][name] = value;
        setfamilyMembers(list);
    }
    const handleremove = index => {
        const list = [...familyMembers];
        list.splice(index, 1);
        setfamilyMembers(list);
    }

    const handleaddclick = () => {
        setfamilyMembers([...familyMembers, { firstName: '', lastName: '' }]);
    }


    //validations
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email) {
            return toast.warning("please fill all the fields");
        }
        var letters = /^[A-Za-z]+$/;
        if (!firstName.match(letters)) {
            return toast.warning("first name should be alphabets only");;
        }
        if (!lastName.match(letters)) {
            return toast.warning("last name should be alphabets only");;
        }
        else {
           

            const maritialStatustext = maritialStatus ? "married" : "unmarried"
            const data = {
                firstName,
                lastName,
                email,
                gender,
                maritialStatustext,
                familyMembers
            }

            dispatch({ type: "ADD_USER", payload: data })
            toast.success("user Added");
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
                        <div className="form-group p-2">
                            <div className="row">
                                <div className="dropdown col-6">
                                    <label htmlFor="cars">Gender : </label>
                                    <select value={gender} onChange={e => setGender(e.target.value)} name="gender" id="gender">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>

                                <div className="form-check p-2 col-6">
                                    <input classAName="form-check-input" type="checkbox" checked={maritialStatus} onChange={e => setmaritialStatus(e.target.checked)} id="flexCheckDefault" />
                                    <label className="form-check-label " htmlFor="flexCheckDefault">
                                        Marital Status
                                    </label>
                                </div>
                            </div>

                        </div>


                        {/* <div className="form-group p-2">
                            <input className="form-control" type="text" placeholder="Family Member" value={familyMembers} onChange={e => setFamilyMembers(e.target.value)} />
                        </div> */}
                        <h6>Add Family Member</h6>

                        {
                            familyMembers.map((x, i) => {
                                return (

                                    <div className="row mt-3 mb-5">
                                        <div class="form-group col-md-4 ">
                                            <input type="text" name="firstName" class="form-control" placeholder="Enter First Name" onChange={e => handleinputchange(e, i)} />
                                        </div>
                                        <div class="form-group col-md-4 ">
                                            <input type="text" name="lastName" class="form-control" placeholder="Enter Last Name" onChange={e => handleinputchange(e, i)} />
                                        </div>
                                        <div class="form-group col-md-4">
                                            {familyMembers.length - 1 === i &&
                                                <button className="btn btn-success btn-sm" onClick={handleaddclick}>Add Member</button>
                                            }
                                            {
                                                familyMembers.length !== 1 &&
                                                <button className="btn btn-danger btn-sm mx-1" onClick={() => handleremove(i)}>Remove</button>
                                            }

                                        </div>

                                    </div>

                                );
                            })}


                        <div className="form-group p-2">
                            <input className="btn btn-primary" type="submit" value="Add User" />
                        </div>
                    </form>

                </div>

            </div>

            <Table />


        </div>
    )
}

export default Form