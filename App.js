import './App.css';
import React from "react";
import EmployeeForm from "./Components/EmployeeForm";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount() {
    const storedEmployees = localStorage.getItem("employees");

    if (storedEmployees) {
      this.setState({
        employees: JSON.parse(storedEmployees)
      });
    }
  }

  addEmployee(employee) {
    const updatedEmployees = [...this.state.employees, employee];

    this.setState(
      { employees: updatedEmployees },
      this.saveData
    );
  }

  saveData() {
    localStorage.setItem(
      "employees",
      JSON.stringify(this.state.employees)
    );
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Employee Management System</h1>

        <EmployeeForm addEmployee={this.addEmployee} />

        <h2>Employees</h2>
        <ul>
          {this.state.employees.map((emp, index) => (
            <li key={index}>
              {emp.name}, {emp.title}, {emp.department}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
