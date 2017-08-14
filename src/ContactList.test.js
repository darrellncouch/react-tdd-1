import React from 'react';
import {shallow} from 'enzyme';
import ContactList from "./ContactList";
import sinon from 'sinon';

describe('ContactList', () => {
  it('should render', () => {
    const div = document.createElement('div');
    const contacts = [
      {name: 'Alan', email: 'a@turing.com', phone: '505-321-2223'}
    ];
    const contactList = shallow(<ContactList contacts={contacts}/>, div);
    expect(contactList.exists()).toBe(true);
  });
  it('has clickable people', () => {
    const contacts = [
      {name: 'Alan', email: 'a@turing.com', phone: '505-321-2223'}
    ];
    const removeContact = jest.fn();
    const div = document.createElement('div');
    const contactList = shallow(<ContactList contacts={contacts} removeContact={removeContact} />, div);
    
    expect(contactList.find('li')).toHaveLength(1);
    contactList.find('button').simulate('click');
    expect(removeContact).toHaveBeenCalled();
  });
});
