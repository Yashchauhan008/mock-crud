import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DisplayFaculty = () => {
  const [faculties, setFaculties] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    fetch("https://66b9ccd0fa763ff550f98e06.mockapi.io/Faculty/")
      .then((res) => res.json())
      .then((data) => setFaculties(data));
  }, []);

  return (
    <div>
      <h2 className="m-5 text-center">Faculty List</h2>

      <button
        className="btn btn-primary m-5"
        onClick={() => {
          nav("/add");
        }}
      >
        Add Faculty
      </button>

      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>FacultyID</th>
            <th>FacultyName</th>
            <th>FacultyExp</th>
            <th>FacultyImage</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>

        <tbody>
          {faculties.map((faculty) => (
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
                    nav("/details/" + faculty.FacultyID);
                  }}
                >
                  Details
                </button>
              </td>

              <td>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    nav("/edit/" + faculty.FacultyID);
                  }}
                >
                  Edit
                </button>
              </td>

              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    fetch(
                      "https://66b9ccd0fa763ff550f98e06.mockapi.io/Faculty/" +
                      faculty.FacultyID,
                      {
                        method: "DELETE",
                      } 
                    )
                      .then((res) => {
                        return res.json();
                      })
                      .then((res) => {
                        //  window.location.reload();
                        setFaculties(faculties.filter(faculty => faculty.FacultyID != res.FacultyID))
                      });
                  }}
                >
                  Del
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayFaculty;


{/* <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    fetch(
                      "https://66b9ccd0fa763ff550f98e06.mockapi.io/Faculty/" +
                        faculty.FacultyID,
                      {
                        method: "DELETE",
                      }
                    )
                      .then((res) => res.json())
                      .then((res) => {
                        setFaculties(
                          faculties.filter(
                            (fac) => fac.FacultyID != res.FacultyID
                          )
                        );
                      });
                  }}
                >
                  Del
                </button> */}
