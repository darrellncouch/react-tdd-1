import React, { Component } from 'react';

class ContactInput extends Component {
  constructor() {
    super();

    this.state = {
      newContact: {
        name: ''
      }
    }
  }

  handleNameChange(e) {
    var {phone, email} = this.state.newContact;
    this.setState({newContact: {
      name: e.target.value
    }})
  }

  handleSubmit(contact, e) {
    e.preventDefault();
    this.props.addContact(contact);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this, this.state.newContact)}>
          <p>Name: <input type="text" onChange={this.handleNameChange.bind(this)} value={this.state.newContact.name}/></p>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default ContactInput;
