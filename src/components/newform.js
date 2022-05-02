import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddData } from "../Redux/Action/DataAction";


function Addmoreinput() {
    let history = useHistory();
    let dispatch = useDispatch();
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    // const [Gender, setGender] = useState("");
    // const [MartialStatus, setMaritaStatus] = useState();
    const [inputList, setinputList] = useState([{ firstName: '', lastName: '' }]);

    const handleinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setinputList(list);
    }

    const handleremove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setinputList(list);
    }

    const handleaddclick = () => {
        setinputList([...inputList, { firstName: '', lastName: '' }]);
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const formdata = {

            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            //   Gender: Gender,
            //   MaritalStatus: MartialStatus
        }
        dispatch(AddData(formdata));
        console.log("formdata" + JSON.stringify(formdata));
        history.push("/DataList");
    }

    return (
        <>
            <h1 className='container col-md-6'>Add Details</h1>
            <form className="col-md-offset-3 col-md-6  container-fluid shadow">
                <div className="form-group mx-3 my-3">
                    <label htmlFor="fname" className="control-label" style={{ fontWeight: 'bold' }}>First Name</label>
                    <input type="text" className="form-control" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group mx-3 my-3">
                    <label htmlFor="Lname" className="control-label" style={{ fontWeight: 'bold' }}>Last Name</label>
                    <input type="text" className="form-control" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form-group mx-3 my-3">
                    <label htmlFor="Email" className="control-label" style={{ fontWeight: 'bold' }}>Email</label>
                    <input type="email" className="form-control" value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>



                {
                    inputList.map((x, i) => {
                        return (

                            <div className="row mb-3">


                                <div class="form-group col-md-4 my-4 mx-3">

                                    <input type="text" name="firstName" class="form-control" placeholder="Enter First Name" onChange={e => handleinputchange(e, i)} />
                                </div>
                                <div class="form-group col-md-4 my-4 mx-3">

                                    <input type="text" name="lastName" class="form-control" placeholder="Enter Last Name" onChange={e => handleinputchange(e, i)} />
                                </div>
                                <div class="form-group col-md-2 mt-4 my-2">
                                    {
                                        inputList.length !== 1 &&
                                        <button className="btn btn-danger mx-1" onClick={() => handleremove(i)}>Remove</button>
                                    }
                                    {inputList.length - 1 === i &&
                                        <button className="btn btn-success" onClick={handleaddclick}>AddMember</button>
                                    }
                                </div>

                            </div>

                        );
                    })}



                <div className="btn btn-primary" onClick={submitHandler}>submit</div>

                {/* </div>
            </div>
        </Container> */}
            </form>
        </>
    );
}
export default Addmoreinput;