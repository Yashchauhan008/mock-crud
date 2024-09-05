import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditFaculty = () => {
  const [data, setData] = useState({});
  const nav = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch("https://66b9ccd0fa763ff550f98e06.mockapi.io/Faculty/" + params.id)
      .then((res) => res.json())
      .then((data) => setData(data)); 
  }, []);

  function editFaculty() {
    fetch("https://66b9ccd0fa763ff550f98e06.mockapi.io/Faculty/" + params.id, {
      method: "PUT",
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
        value={data.FacultyName}
        onChange={(e) => {
          setData({ ...data, FacultyName: e.target.value });
        }}
      />

      <label htmlFor="FacultyExp">FacultyExp</label>
      <input
        type="text"
        id="FacultyExp"
        value={data.FacultyExp}
        onChange={(e) => {
          setData({ ...data, FacultyExp: e.target.value });
        }}
      />

      <button
        className="btn btn-outline-primary"
        onClick={() => {
          editFaculty();
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default EditFaculty;
