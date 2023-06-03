
import React from 'react';
import { Link } from 'react-router-dom';

class AddContacts extends React.Component {
  state = {
    name: '',
    number: '',
    email: '',
  };

  add = (e) => {
    e.preventDefault();

    if (this.state.name === '' || this.state.number === '') {
      alert('Name & Number is required!');
      return;
    }

    this.props.addContactHandler(this.state);

    this.setState({ name: '', number: '', email: '' });

    this.props.history.push('/');
  };

  render() {
    return (
      <div className='ui main'>
        <h2 className='AddContact-Heading'>Add Contact</h2>
        <form className='ui form' onSubmit={this.add}>
          <div className='field'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Number</label>
            <input
              type='number'
              name='number'
              placeholder='Number'
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <button className='ui-button-Add'>Add</button>
            <Link to='/'>
              <button className='back-btn'>Back</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContacts;