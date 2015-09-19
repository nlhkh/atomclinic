import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Patient extends Component {
  render() {
    return (
      <div>
        <Link className='button menu-item' to='patientDetail' params={{id: this.props.info._id}}>
          <label>{this.props.info.name}</label>
        </Link>
      </div>
    )
  }
}

Patient.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })
};

export default Patient;
