import React from 'react';
import { Link } from 'react-router-dom';

import '../css/style.css';
import { fetchData, deleteData } from '../api/index';

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    //call of fetch function define at line number 19
    this.fetchData();
  }

  // defination of fetch function, call at line number 15
  fetchData = async () => {
    const data = await fetchData();
    this.setState({
      data: data,
    });
  };

  deleteData = async (userID) => {
    let status = await deleteData(userID);
    if (status) {
      this.fetchData();
    }
  };

  render() {
    return (
      <div className="home-container">
        <div className="home-add-container">
          <div className="home-add-btn">
            <Link to="/createUser">
              <i class="fas fa-user-plus"></i>
            </Link>
          </div>
          <div className="home-table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Aciton</th>
                </tr>
              </thead>
              <tbody>
                {console.log('thisState', this.state.data)}
                {this.state.data.map((res, key) => (
                  <tr key={key}>
                    <td> {res.id} </td>
                    <td> {res.name} </td>
                    <td> {res.class} </td>
                    <td>
                      <i
                        className="far fa-trash-alt home-action-btn home-del-btn"
                        onClick={() => {
                          this.deleteData(res.id);
                        }}
                      ></i>

                      <Link
                        to={{
                          pathname: `/viewUser/${res.id}`,
                          state: {
                            id: res.id,
                            username: res.name,
                            classNumber: res.class,
                            updated: res.updated,
                          },
                        }}
                      >
                        {/* you are fetching user data on previous page every component should be responsible for getting it's data */}
                        <i className="fas fa-eye home-action-btn"></i>
                      </Link>

                      <Link
                        to={{
                          pathname: `/editUser/${res.id}`,
                          state: {
                            id: res.id,
                            username: res.name,
                            classNumber: res.class,
                            updated: res.updated,
                          },
                        }}
                      >
                        <i className="fas fa-edit home-action-btn"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
