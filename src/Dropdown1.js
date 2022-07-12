import React, { useEffect, useState } from 'react'
import "./Dropdown1.css";
import Form from 'react-bootstrap/Form';
import {Divider} from "@material-ui/core";
import data from "./data";
function Dropdown1() {
  const [down,setdown] = useState(false);
  const [open,setopen] = useState(false);
  const [openpractioners,setopenpractioners] = useState(false);
  const [selected,setselected] = useState({
    label:"Select employee",
    imgUrl:"/images/man.jpg"
  });
  const [allchecked,setallchecked] = useState(false);
  const [search,setsearch] = useState("");
  const handleopen =  () => {
    setopen(!open)
  }
  const handleselacted = (item) => {
    setselected(item)
  }
  const handlesearch = (e) => {
    setsearch(e.target.value);
  }

  useEffect(() => {
    const searchindex = data.findIndex((item) => {
      if(item.label == search){
        return item
      }
    });
    console.log(searchindex)
  },[search]) 
  const style = {background:"gray"}
  return (  
    <div className='maindiv'>
      <div className='dropdownclick' onClick={() => setdown(!down)}>
          <img src={selected.imgUrl} alt="" />
           <h4>{selected.label}</h4>
          <div className={`${down ? "iconcontainer" : "iconcontainer up"}`}> <i className="fas fa-chevron-down" /></div>
      </div>
      {
        down && <div className='menudiv'>
            <div className='searchbox'>
                 <div className='icondiv'><i className="fas fa-search icon" />  </div>
                <input type="text" value={search} onChange={handlesearch} className='search' placeholder='Search employee..' />
                <span className='clear' onClick={() => setsearch("")}>clear</span>
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
                        <div key={id} className={`${i.label == search ? "listbox color" :"listbox"}`} onClick={() => handleselacted(i)}>
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
                  
            <div className='practioners_div' onClick={() => setopenpractioners(!openpractioners)}>
                    <p className='practioners_title'>All practioners</p>
                    <Form.Check aria-label="option 1" checked={allchecked} onChange={() => setallchecked(!allchecked)}/>
            </div>
            {
                    openpractioners &&
                    data.map((i,id) => {
                      return (
                        <>
                        <div key={i.id} className='listbox' onClick={() => handleselacted(i)}>
                        <div className='listitem'>
                             <img src={i.imgUrl} alt="" />
                           <div className='textdiv'>  <p className='listitemtext'>{i.label}</p></div>
                            <Form.Check aria-label="option 1" onChange={false} checked={allchecked} />
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