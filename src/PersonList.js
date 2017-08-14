import React, {Component} from 'react';

class PersonList extends Component {
  get people() {
    return this.props.people.map((person, i) => (
        <li key={i}>
          {person.firstName} {person.lastName}
          &nbsp; <a href="javascript:void(0)" onClick={() => this.props.onEdit(person)}>edit</a>
        </li>
    ))
  }

  render() {
    return (
        <ul className="PersonList">
          {this.people}
        </ul>
    );
  }
}

export default PersonList;