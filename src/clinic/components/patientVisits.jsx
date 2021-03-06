import React, { Component } from 'react';
import { Link } from 'react-router';
import VisitList from './visitList';

class PatientVisits extends Component {
  render() {
    return (
      <div>
        <Link className='button button-primary u-full-width' to='patientNewVisit' params={{ id: this.props.params.id}}>+ New visit</Link>
        <VisitList patientId={this.props.params.id} />
      </div>
    );
  }
}

export default PatientVisits;
