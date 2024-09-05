import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FacultyDetails = () => {
  const params = useParams();
  const [faculty, setFaculty] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    fetch("https://66b9ccd0fa763ff550f98e06.mockapi.io/Faculty/" + params.id)
      .then((res) => res.json())
      .then((data) => setFaculty(data));
  }, []);

  console.log(" :::", faculty);
  return (
    <div>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>FacultyID</th>
            <th>FacultyName</th>
            <th>FacultyExp</th>
            <th>FacultyImage</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{faculty.FacultyID}</td>
            <td>{faculty.FacultyName}</td>
            <td>{faculty.FacultyExp}</td>
            <td>
              <img src={faculty.FacultyImage} alt="" />
            </td>
            <td>
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  nav("/");
                }}
              >
                Back
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FacultyDetails;
