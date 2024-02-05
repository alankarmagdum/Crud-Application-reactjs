// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// function Read() {

//     //store that Array data.
//     const [data, setData] = useState([]);


//   const setToLocalStorage = (id, Name, DOB,Address,Mobile) => {
//     localStorage.setItem("id", id);
//     localStorage.setItem("name", Name);
//     localStorage.setItem("DOB", DOB);
//     localStorage.setItem("Address", Address);
//     localStorage.setItem("Mobile", Mobile);
//   };


//     }

//     function getData() {
//         axios.get("https://65bdcaf1b51f9b29e933adcf.mockapi.io/curd-app")
//             //promise return
//             .then((res) => {
//                 console.log(res.data);
//                 setData(res.data);
//             })
//     }

//     function handelDelete(id) {
//         axios.delete(`https://65bdcaf1b51f9b29e933adcf.mockapi.io/curd-app/${id}`)
//             .then(() => {
//                 getData();
//             })
//     }

//     useEffect(() => {
//         getData();
//     }, []);

//     // getData();

//     return (
//         <>
//             <h2> Read Operation</h2>
//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <th scope="col">#</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">DOB</th>
//                         <th scope="col">Address</th>
//                         <th scope="col">Mobile</th>
//                         <th scope="col"></th>
//                         <th scope="col"></th>
//                     </tr>
//                 </thead>

//                 {
//                     data.map((eachData) => {
//                         return (
//                             <>

//                                 <tbody>
//                                     <tr>
//                                         <th scope="row">{eachData.id}</th>
//                                         <td>{eachData.Name}</td>
//                                         <td>{eachData.DOB}</td>
//                                         <td>{eachData.Address}</td>
//                                         <td>{eachData.Mobile}</td>

//                                         <NavLink to="/update"> <td><button className="btn btn-success"
//                                          onClick={()=>setToLocalStorage(
//                                             eachData.Name,
//                                             eachData.DOB,
//                                             eachData.Address,
//                                             eachData.Mobile
//                                         )}>Edit</button></td></NavLink>

//                                         <td>
//                                             <button className="btn btn-danger"
//                                                 onClick={() => handelDelete(eachData.id)}>Delete</button>
//                                         </td>
//                                     </tr>
//                                 </tbody>

//                             </>
//                         )
//                     })




//                 }

//             </table>
//         </>
//     )
// }

// export default Read;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState([]);
    const [tabledark, setTableDark] = useState("");

    function getData() {
        axios
            .get("https://65bdcaf1b51f9b29e933adcf.mockapi.io/curd-app/")
            .then((res) => {
                setData(res.data);
            });
    }

    function handleDelete(id) {
        axios
            .delete(`https://65bdcaf1b51f9b29e933adcf.mockapi.io/curd-app/${id}`)
            .then(() => {
                getData();
            });
    }

    const setToLocalStorage = (id, name, DOB, Address, Mobile) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("DOB", DOB);
        localStorage.setItem("Address", Address);
        localStorage.setItem("Mobile", Mobile);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    onClick={() => {
                        if (tabledark === "table-dark") setTableDark("");
                        else setTableDark("table-dark");
                    }}
                />
            </div>
            <div className="d-flex justify-content-between m-2">
                <h2>Read Operation</h2>
                <Link to="/">
                    <button className="btn btn-secondary">Create</button>
                </Link>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Address</th>
                        <th scope="col">Mobile</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {data.map((eachData) => {
                    return (
                        <>
                            <tbody>
                                <tr>
                                    <th scope="row">{eachData.id}</th>
                                    <td>{eachData.name}</td>
                                    <td>{eachData.DOB}</td>
                                    <td>{eachData.Address}</td>
                                    <td>{eachData.Mobile}</td>
                                    <td>
                                        <Link to="/update">
                                            <button
                                                className="btn btn-success"
                                                onClick={() =>
                                                    setToLocalStorage(
                                                        eachData.name,
                                                        eachData.DOB,
                                                        eachData.Address,
                                                        eachData.Mobile
                                                    )
                                                }
                                            >
                                                Edit{" "}
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(eachData.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </table>
        </>
    );
};

export default Read;


