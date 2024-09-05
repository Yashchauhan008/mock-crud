import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddFaculty = () => {
  const [data, setData] = useState({
    FacultyName: "",
    FacultyExp: 0,
  });
  const nav = useNavigate();

  function addFaculty() {
    fetch("https://66b9ccd0fa763ff550f98e06.mockapi.io/Faculty/",{
      method: "POST",
      headers: {
        "Content-type": "application/json", 
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res.status);
      nav("/");
    });
  }

  return (
    <div className="d-flex flex-column  container-fluid">
      <label htmlFor="FacultyName">FacultyName : </label>
      <input
        type="text"
        id="FacultyName"
        onChange={(e) => {
          setData({ ...data, FacultyName: e.target.value });
        }}  
      />

      <label htmlFor="FacultyExp">FacultyExp</label>
      <input
        type="text"
        id="FacultyExp"
        onChange={(e) => {
          setData({ ...data, FacultyExp: e.target.value });
        }}
      />

      <button
        className="btn btn-outline-primary"
        onClick={() => {
          addFaculty();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddFaculty;
