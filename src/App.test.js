import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import ContactList from './ContactList';
import ContactInput from './ContactInput'

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    const contactList = app.find(ContactList.name);
    expect(contactList).toHaveLength(1);
  });

  it('has three contacts in the state', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    expect(app.state().contacts).toHaveLength(3);
  });

  it('passes three contacts in the ContactList props', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    const contactList = app.find(ContactList.name);
    expect(contactList.props().contacts).toHaveLength(3);
  });

  it('passes a function into ContactInput with a prop called "addContact"', () => {
    const div = document.createElement('div');
    const app = shallow(<App/>, div);
    const contactInput = app.find(ContactInput.name);
    expect(typeof contactInput.props().addContact).toEqual('function');
  });

  it('should contain a function called handleSubmit', () => {
    const div = document.createElement('div');
    const app = shallow(<App />, div);
    expect(typeof app.instance().addContact).toBe('function');
  });

  it("should add a contact to the state if addContact is called", function () {
    const div = document.createElement('div');
    const app = shallow(<App />, div);
    let newContact = { name: 'James Taylor' }
    app.instance().addContact(newContact);
    expect(app.state().contacts).toHaveLength(4);
  });
})
