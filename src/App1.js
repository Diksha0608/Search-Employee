import React, { Component } from 'react';  
import DatePicker from 'react-datepicker';  
import "react-datepicker/dist/react-datepicker.css";  
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App1.css' ;


// import "react-multi-date-picker/styles/backgrounds/bg-gray.css"
  
  
class App1 extends Component {  
  
  constructor (props) {  
    super(props)  
    this.state = {  
      startDate: new Date()  
    };  
    this.handleChange = this.handleChange.bind(this);  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  }  
  
  handleChange(date) {  
    this.setState({  
      startDate: date  
    })  
  }  
  
  onFormSubmit(e) {  
    e.preventDefault();  
    console.log(this.state.startDate)  
  }  
   
  render() {  
    return (  
      <div style={{top:"-626.4232177734375px"}}>
      <form onSubmit={ this.onFormSubmit }>  
        <div style={{borderRadius:"40px"}}   className="form-group">  
          <DatePicker 
          
          placeholderText='date-picker'  
              selected={ this.state.startDate }  
              onChange={ this.handleChange }  

          /> 
        </div>  
      </form>  
      </div>
    );  
  }  
    
}  
export default App1;  