import react from "react";

class AddContact extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setContact([
      ...this.props.contacts,
      {
        id: "123",
        name: this.state.name,
        email: this.state.email,
      },
    ]);

    this.setState({ name: "", email: "" });
  }

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              types="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              types="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue" onClick={this.handleSubmit}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
