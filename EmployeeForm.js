import React from "react";
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      department: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("Employee Data:", this.state);

    this.setState({
      name: "",
      email: "",
      title: "",
      department: ""
    });
  }

  render() {
    return (
      <form className="employee-form" onSubmit={this.handleSubmit}>
        <h1>Add Employee</h1>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Job Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}


export default EmployeeForm;
