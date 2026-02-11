import React from "react";
import { useParams } from "react-router-dom";
import "./EmployeeDetail.css";

function EmployeeDetail(props) {
  const { id } = useParams();

  // IMPORTANT: Compare as string, not parseInt
  const employee = props.employees.find(
    (employee) => employee.EmployeeId === id
  );

  if (!employee) {
    return <div className="employee-detail">Employee not found.</div>;
  }

  const { EmployeeId, name, email, department, title } = employee;

  return (
    <div className="employee-detail">
      <h1>Employee Detail</h1>
      <table>
        <tbody>
          <tr>
            <td><strong>Employee ID:</strong></td>
            <td>{EmployeeId}</td>
          </tr>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{name}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><strong>Job Title:</strong></td>
            <td>{title}</td>
          </tr>
          <tr>
            <td><strong>Department:</strong></td>
            <td>{department}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDetail;
