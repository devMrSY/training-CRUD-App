import React from 'react';

import { updatingResource } from '../api/index';
import { Link } from 'react-router-dom';

export default class create extends React.Component {
  constructor(props) {
    super(props);
    const { id, username, classNumber, updated } = this.props.location.state;
    this.state = {
      id: id,
      username: username,
      classNumber: classNumber,
      updated: updated,
      flag: false,
    };
  }

  onChangehandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updatingResource = async (e) => {
    e.preventDefault();
    this.setState({
      updated: new Date().toLocaleTimeString(),
    });
    await updatingResource(this.state);
    this.props.history.push('/home');
  };

  render() {
    const { username, classNumber, updated } = this.state;
    return (
      <div>
        <div>
          <Link to="/home">
            <i class="fas fa-home view-home" />
          </Link>
          <form
            onChange={this.onChangehandler}
            onSubmit={this.updatingResource}
          >
            <input value={username} name="username"></input>
            <input value={classNumber} name="classNumber"></input>
            <input value={updated} name="updated"></input>
            <button type="Submit">submit details</button>
          </form>
        </div>
      </div>
    );
  }
}
