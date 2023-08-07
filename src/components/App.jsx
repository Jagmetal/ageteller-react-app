
import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {

    constructor() {
        super(); 

        this.state = {
            newDate: '',
            birthday: '05-10-1993',
            showStats: false
        }
    }

    changeBirthday() {
        console.log(this.state);
        this.setState({ 
            birthday: this.state.newDate, 
            showStats: true
        });
    }

  render() {
    return (
      <div className="Container"> {/* Add the Container class */}
        <Form inline>
          <h2>Input Your Birthday!</h2>
          <FormControl 
          onChange={ event => this.setState({newDate: event.target.value})} className="FormControlDate" type="date" /> {/* Add the FormControlDate class */}
          {' '}
          <Button onClick={() => this.changeBirthday()}>
            Submit
          </Button>
          {
            this.state.showStats ?
            <div className="fade age-stats">
                <AgeStats date={this.state.birthday}/>
            </div>
            :
            <div></div>
          }
          
        </Form>
      </div>
    );
  }
}

export default App;
