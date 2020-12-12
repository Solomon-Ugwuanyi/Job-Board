import React, { Component } from 'react';
import styles from './JobsForm.module.scss';

class JobsForm extends Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    if (this.props.currentIndex === -1)
      return {
        title: '',
        city: '',
        employer: '',
        requirements: '',
        tasks: '',
      };
    else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex !== this.props.currentIndex ||
      prevProps.list !== this.props.list
    ) {
      this.setState({ ...this.returnStateObject() });
      console.log(prevProps, this.props);
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //createa a random unique id
    if (this.props.category === 'ADD') {
      alert('A new job was created successfully!');
    } else if (this.props.category === 'EDIT')
      alert('A job was updated successfully!');

    const _id = Math.random().toString(36).substr(2, 9);
    this.props.onAddOrEdit({ _id, ...this.state });
    this.props.clearState();
  };

  render() {
    return (
      <form className={styles.Container} onSubmit={this.handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <input
              name='title'
              placeholder='Enter Job Title'
              onChange={this.handleInputChange}
              value={this.state.title}
            />
            <br />
            <input
              name='city'
              placeholder='Enter City (N/A if Remote)'
              onChange={this.handleInputChange}
              value={this.state.city}
            />
            <br />
          </div>
          <div>
            <input
              name='employer'
              placeholder='Employer Name'
              onChange={this.handleInputChange}
              value={this.state.employer}
            />
            <br />
            <input
              name='requirements'
              placeholder='Enter Requirements'
              onChange={this.handleInputChange}
              value={this.state.requirements}
            />
            <br />
          </div>
          <div>
            <input
              name='tasks'
              placeholder='Enter Tasks'
              onChange={this.handleInputChange}
              value={this.state.tasks}
            />
            <br />
            <button type='submit'>Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default JobsForm;
