import React, { useEffect, useState } from 'react'
import "./Dropdown1.css";
import Form from 'react-bootstrap/Form';
import {Divider} from "@material-ui/core";
import data from "./data";
function Dropdown1() {
  const [down,setdown] = useState(false);
  const [open,setopen] = useState(false);
  const handleopen =  () => {
    setopen(true)
  }

  return ( 
    <div className='maindiv'>
      <div className='dropdownclick' onClick={() => setdown(!down)}> 
          <img src="/images/man.jpg" alt="" />
           <h4>Select employee</h4>
          <div className={`${down ? "iconcontainer" : "iconcontainer up"}`}> <i className="fas fa-chevron-down" /></div>
      </div>
      {
        down && <div className='menudiv'>
            <div className='searchbox'>
                 <div className='icondiv'><i className="fas fa-search icon" />  </div>
                <input type="text" className='search' placeholder='Search employee..' />
            </div>

            
             
               
                 
                  <div className='listbox' onClick={() => handleopen() }>
                     <div className='listitem'>
                          <img src="/images/woman1.jpg" alt="" />
                          <div className='textdiv'><p className='listitemtext'>All Employee</p></div>
                         <Form.Check aria-label="option 1"/>
                     </div>
                  </div>
                  <Divider style={{background:"white",width:"100%"}} />
                  {
                    open &&
                    data.map((i,id) => {
                      return (
                        <>
                        <div className='listbox'>
                        <div className='listitem'>
                             <img src={i.imgUrl} alt="" />
                           <div className='textdiv'>  <p className='listitemtext'>{i.label}</p></div>
                            <Form.Check aria-label="option 1"/>
                        </div>
                     </div>
                       <Divider style={{background:"white",width:"100%"}} />
                       </>
                      )
                    } ) 
                  }
                  
                
              
            
           
        </div> 
        
      }
    </div>
  )
}

export default Dropdown1;