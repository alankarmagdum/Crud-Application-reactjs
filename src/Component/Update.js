import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [Address, setAddress] = useState("");
  const [Mobile, setMobile] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setDOB(localStorage.getItem("DOB"));
    setAddress(localStorage.getItem("Address"));
    setMobile(localStorage.getItem("Mobile"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://65bdcaf1b51f9b29e933adcf.mockapi.io/curd-app/${id}`, {
        name: name,
        DOB : DOB,
        Address : Address,
        Mobile :  Mobile,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">DOB</label>
          <input
            type="date"
            className="form-control"
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input
            type="tel"
            className="form-control"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </>
  );
};

export default Update;




