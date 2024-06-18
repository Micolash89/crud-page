import React from "react";
import "./table2.css";

function Table2() {
  return (
    <>
      <section className=" main__section mainTable">
        <h2 className="mainTable__h2">Payment Details</h2>
        <table className="mainTable__table">
          <thead className="mainTable__table--thead">
            <tr>
              <th>Name</th>
              <th>Payment Schedule</th>
              <th>Bill Number</th>
              <th>Amount Paid</th>
              <th>Balance Amount</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="mainTable__table--tbody">
            <tr>
              <td>Juan Pérez</td>
              <td>Mensual</td>
              <td>12345</td>
              <td>$100.00</td>
              <td>$50.00</td>
              <td>2024-06-08</td>
              <td className="icon">
                <i className="ri-eye-line"></i>
              </td>
            </tr>
            <tr>
              <td>María López</td>
              <td>Semanal</td>
              <td>12346</td>
              <td>$200.00</td>
              <td>$0.00</td>
              <td>2024-06-07</td>
              <td className="icon">
                <i className="ri-eye-line"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Table2;
