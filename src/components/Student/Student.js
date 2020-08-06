import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 


export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {}
    }

  }

  componentDidMount() {
    return axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then( results => {
        this.setState( { studentInfo: results.data } )
        console.log('API Results Student Info: ', results.data )
      } ) 
  }

  render() {

    console.log("Student Render",this.state.studentInfo);

    return (
      
      <div className="box">
        <Link to={`/classlist/${this.state.studentInfo.class}`}>
          <h2>{`<-- Back to ${this.state.studentInfo.class}`}</h2>
        </Link>
        <h1>Student</h1>
        <h1>{`${this.state.studentInfo.first_name} ${this.state.studentInfo.last_name}`}</h1>
        <h3>{`Class:  ${this.state.studentInfo.class}`}</h3>
        <h3>{`Grade:  ${this.state.studentInfo.grade}`}</h3>
        <h3>{`Email:  ${this.state.studentInfo.email}`}</h3>
      </div>
    )
  }
}