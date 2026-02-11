import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EmployeeForm from "./Components/EmployeeForm";
import EmployeeList from "./Components/EmployeeList";
import EmployeeDetail from "./Components/EmployeeDetail";

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
    const employeeWithId = {
      ...employee,
      EmployeeId:
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : String(Date.now()) + String(Math.floor(Math.random() * 100000))
    };

    const updatedEmployees = [...this.state.employees, employeeWithId];

    this.setState({ employees: updatedEmployees }, this.saveData);
  }

  saveData() {
    localStorage.setItem("employees", JSON.stringify(this.state.employees));
  }

  render() {
    return (
      <Router>
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <EmployeeForm addEmployee={this.addEmployee} />
                  <EmployeeList employees={this.state.employees} />
                </>
              }
            />

            <Route
              path="/employees/:id"
              element={<EmployeeDetail employees={this.state.employees} />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
