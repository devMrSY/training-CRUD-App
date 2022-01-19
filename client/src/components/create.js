import React from 'react';

import { createResource } from '../api/index';
import { Link } from 'react-router-dom';

export default class create extends React.Component {
  // use initState function
  state = {
    username: '',
    classNumber: '',
    updated: '',
    flag: false,
  };

  onChangehandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createResource = async (e) => {
    e.preventDefault();
    this.setState({
      updated: new Date().toLocaleTimeString(),
    });
    await createResource(this.state); //Imported function Red line number 3
    this.props.history.push('/home');
  };

  render() {
    const { classNumber, username } = this.state;
    return (
      <div>
        <div>
          <Link to="/home">
            <i className="fas fa-home view-home" />
          </Link>
          <form onChange={this.onChangehandler} onSubmit={this.createResource}>
            <input value={username} name="username"></input>
            <input value={classNumber} name="classNumber"></input>
            <button type="Submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
