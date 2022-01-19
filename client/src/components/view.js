import React from 'react';
import { Link } from 'react-router-dom';

export default class view extends React.Component {
  render() {
    const { id, username, classNumber, updated } = this.props.location.state;
    return (
      <div className="view-container">
        <div className="view-back">
          <Link to="/home">
            <i class="fas fa-home view-home"></i>
          </Link>
          <div className="view-data">
            {id}
            <br />
            {username}
            <br />
            {classNumber}
            <br />
            {updated}
          </div>
        </div>
      </div>
    );
  }
}
