import React, { Component } from 'react';

export default class JobDetails extends Component {
  state = {
    jobInfo: null,
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    const jobs = JSON.parse(localStorage.getItem('openings'));

    const jobInfo = jobs.find((job) => job._id === id);
    this.setState({ jobInfo });
  };





  render() {



    return (
      <div style={{ border: '3px solid' }}>
        {this.state.jobInfo ? (
          <div>
            <p>{this.state.jobInfo.title.toUpperCase()}</p>
            <hr />
            <p>{this.state.jobInfo.city}</p>
            <hr />
            <p>{this.state.jobInfo.employer}</p>
            <hr />
            <h3>Requirements: </h3>
            <p>  {this.state.jobInfo.requirements}</p>
            <hr />
            <h3>Tasks include, but not Limited to: </h3>
            <p>{this.state.jobInfo.tasks}</p>
            <hr />


          </div>
        ) : (
            <p>There is no job with this details!</p>
          )}
      </div>
    );
  }
}
