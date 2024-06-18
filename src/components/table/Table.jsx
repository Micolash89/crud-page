import React from "react";
import "./table.css";

function Table() {
  return (
    <>
      <section className="crud">
        <div className="flexrow crud__div">
          <h2 className="crud__div--h2">Student List</h2>
          <div className="flexrow crud__div--div">
            <i className="ri-expand-up-down-line"></i>
            <button>Add new Student</button>
          </div>
        </div>
        <table className="crud__table">
          <thead className="crud__table--thead">
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Phone</th>
              <th>Enroll Number</th>
              <th>Date of admission</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="crud__table--tbody">
            <tr>
              <td>
                <img src="images/pablo.png" alt="avatar" />
              </td>
              <td>Juan Pérez</td>
              <td>karthi@gmmail.com</td>
              <td>7305477760</td>
              <td>1234567305477760</td>
              <td>08-Dec, 2021</td>

              <td className="icon">
                <i className="ri-pencil-line"></i>
                <i className="ri-delete-bin-6-line"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src="images/pablo.png" alt="avatar" />
              </td>
              <td>Juan Pérez</td>
              <td>karthi@gmmail.com</td>
              <td>7305477760</td>
              <td>1234567305477760</td>
              <td>08-Dec, 2021</td>

              <td className="icon">
                <i className="ri-pencil-line"></i>
                <i className="ri-delete-bin-6-line"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src="images/pablo.png" alt="avatar" />
              </td>
              <td>Juan Pérez</td>
              <td>karthi@gmmail.com</td>
              <td>7305477760</td>
              <td>1234567305477760</td>
              <td>08-Dec, 2021</td>

              <td className="icon">
                <i className="ri-pencil-line"></i>
                <i className="ri-delete-bin-6-line"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Table;
