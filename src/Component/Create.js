



import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [Address, setAddress] = useState("");
  const [Mobile, setMobile] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    axios
      .post("https://65bdcaf1b51f9b29e933adcf.mockapi.io/curd-app/", {
        name: name,
        DOB : DOB,
        Address : Address,
        Mobile :  Mobile
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <h3>This is new Change</h3>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">DOB</label>
          <input
            type="date"
            className="form-control"
            onChange={(e) => setDOB(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input
            type="tel"
            className="form-control"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

         <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;


