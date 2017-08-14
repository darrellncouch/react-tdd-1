import React from 'react';
import {shallow} from 'enzyme';
import ContactInput from './ContactInput';

describe('ContactInput', () => {
  it('should render', () => {
    const div = document.createElement('div');
    const contactInput = shallow(<ContactInput />, div);
    expect(contactInput.exists()).toBe(true);
  });
  it('should find 1 input tag', () => {
    const div = document.createElement('div');
    const contactInput = shallow(<ContactInput />, div);

    expect(contactInput.find('input')).toHaveLength(1);
  });
  it('should contain a handleSubmit function', () => {
    const div = document.createElement('div');
    const contactInput = shallow(<ContactInput />, div);
    expect(typeof contactInput.instance().handleSubmit).toBe('function');
  });
  // it('has clickable people', () => {
  //   const people = [
  //     {firstName: 'Alan', lastName: 'Turing'}
  //   ];
  //   const onEdit = sinon.stub();
  //   const div = document.createElement('div');
  //   const personInput = shallow(<PersonInput people={people} onEdit={onEdit} />, div);
  //
  //   expect(personInput.find('a')).toHaveLength(1);
  //   personInput.find('a').simulate('click');
  //   expect(onEdit.calledOnce).toBe(true);
  // });
  // it('has a div with a class of PersonInput', () => {
  //   const people = [
  //     {firstName: 'Alan', lastName: 'Turing'}
  //   ];
  //   const onEdit = sinon.stub();
  //   const div = document.createElement('div');
  //   const personInput = shallow(<PersonInput people={people} onEdit={onEdit} />, div)
  //   expect(personInput.find('ul').hasClass('PersonInput')).toBe(true)
  // })
});
