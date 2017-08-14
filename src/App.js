import React, {Component} from 'react';
import './App.css';
import ContactList from './ContactList';
import ContactInput from './ContactInput';

class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts: [{
        "name": "Torres Schultz",
      },
      {
        "name": "Deleon Peters",
      },
      {
        "name": "Bettye Aguirre",
      }]
    };
  }

  addContact(newContact) {
    this.setState({
      contacts: this.state.contacts.concat(newContact)
    })
  }

  removeContact() {

  }

  render() {
    return (
        <div className="App">
          <ContactInput addContact={this.addContact.bind(this)}/>
          <ContactList
            contacts={this.state.contacts}
            removeContact={this.removeContact.bind(this)}
          />
        </div>
    );
  }
}

export default App;
