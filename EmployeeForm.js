import React from "react";
import "./EmployeeForm.css";

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
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addEmployee(this.state);

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
        <h1>New Employee</h1>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <label htmlFor="title">Job Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <label htmlFor="department">Department</label>
        <input
          id="department"
          type="text"
          name="department"
          value={this.state.department}
          onChange={this.handleChange}
        />

        <button type="submit">Add Employee</button>
      </form>
    );
  }
}

export default EmployeeForm;
