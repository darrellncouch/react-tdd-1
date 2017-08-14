import React, {Component} from 'react';

class ContactList extends Component {

  removeContact() {
    this.props.removeContact();
  }

  render() {
    let people = this.props.contacts.map((person, i) => {
      return (
         <li key={i}>{person.name} <button onClick={this.removeContact.bind(this)}>Delete</button></li>
      )
    })
    return (
        <div className="ContactList">
          <ul onClick={() => this.props.removeContact()}>{people}</ul>
        </div>
    );
  }
}

export default ContactList;
