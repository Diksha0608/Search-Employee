
import App1 from "./App1";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown1 from './Dropdown1';
import './App.css'


function App() {
 

  return (
    
     <>
     <div className='container'>
      <div className="content">
     <div className='dromdown--1'>
      <Dropdown1/>
     </div>
     <div className='date--picker'><App1/></div>
     </div>
     </div>
      
      </>
    );
  }


export default App;
