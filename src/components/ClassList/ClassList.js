import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    //console.log(this.props);
    axios
      .get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then( results => { 
        this.setState( { students: results.data } ) 
        console.log('API Results Class List: ', results.data )
      } )     
  }

  render() {
    //console.log(this.props);
    const studentMap = this.state.students.map( (element, index) => {
     return ( 
      <Link key={index} to={`/student/${element.id}`} >
        <h3 key={index}>{`${element.first_name} ${element.last_name}`}</h3> 
      </Link>
      ) } )

    return (
      <div className="box">
        <Link to={`/`}>
          <h2>{`<-- Back to Home`}</h2>
        </Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentMap}

      </div>
    )
  }
}