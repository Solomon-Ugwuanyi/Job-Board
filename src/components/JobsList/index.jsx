import React, { Component } from 'react';
import JobsForm from '../JobsForm';
import jobs from '../../data/jobs.json';
import { Link } from 'react-router-dom';
import styles from './JobsList.module.scss';

class JobsList extends Component {
  componentDidMount = () => {
    if (localStorage.getItem('openings') === null)
      this.setState({ list: [...jobs, this.returnList()] });
    else this.setState({ list: this.returnList() });
  };

  state = {
    currentIndex: -1,
    list: [],
    category: 'ADD',
    show: false,
  };

  returnList() {
    if (localStorage.getItem('openings') === null)
      localStorage.setItem('openings', JSON.stringify(jobs));
    return JSON.parse(localStorage.getItem('openings'));
  }

  handleEdit = (index) => {
    if (!this.state.show) this.setState({ show: true });

    this.setState({
      currentIndex: index,
      category: 'EDIT',
    });
  };

  clearState = () => {
    this.setState({
      category: 'ADD',
      show: false,
    });
  };

  handleDelete = (index) => {
    var list = this.state.list;
    list.splice(index, 1);
    localStorage.setItem('openings', JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
    alert('You deleted a job successfully!');
  };

  onAddOrEdit = (data) => {
    var list = this.state.list;
    if (this.state.currentIndex === -1) list.unshift(data);
    else list[this.state.currentIndex] = data;
    localStorage.setItem('openings', JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };

  render() {
    return (
      <div className={styles.Container}>
        {this.state.show ? (
          <JobsForm
            currentIndex={this.state.currentIndex}
            list={this.state.list}
            onAddOrEdit={this.onAddOrEdit}
            category={this.state.category}
            clearState={this.clearState}
          />
        ) : (
            <button style={{ fontSize: "1rem" }}
              onClick={() => this.setState({ category: 'ADD', show: true })}
            >
              Create a new job
            </button>
          )}
        <hr />
        <table className={styles.Table}>
          <tbody>
            <th>JOB TITLE</th>
            <th>LOCATION</th>
            <th>EMPLOYER</th>

            {this.state.list.map((item, index) => {
              return (
                <tr key={index}>
                  <td className={styles.tableRows}>
                    <Link to={'/details/' + item._id}>{item.title.toUpperCase()}</Link>
                  </td>
                  <td className={styles.tableRows}>{item.city}</td>
                  <td className={styles.tableRows}>{item.employer}</td>
                  <td>
                    <button style={{ fontSize: "1rem" }} onClick={() => this.handleEdit(index)}>Edit</button>
                  </td>
                  <td>
                    <button className={styles.deleteButton} onClick={() => this.handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default JobsList;
