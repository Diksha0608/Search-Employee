import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, InputBase, Menu, Divider } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Mock_Data from './MOCK_DATA.json';
import './Dropdown1.css'

const useStyles = makeStyles((theme) => ({
  DropDownButton: {
    height: "54px",
    width: "376px",
   cursor:"pointer",
    top: "-626.4232177734375px",
    borderRadius:" 16px",
    color:"black",
    margin: "50px 50px",
    fontSize: "1.125rem",
    background: "#F0F5FB",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "2px solid #007bff",
    // backgroundColor:  "#F0F5FB",
    padding: "0px 20px",  
  },

  inputRoot: {
    width: "100%",
    display:"flex",
    justifyContent:"space-between",
    color:"white",
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: "20px",
    marginLeft: 0,
    width: "100%",
    backgroundColor:" #1C3663",
    color:"white",
  },

  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color:"gray",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },

  searchBarContainer: {
    minWidth: "inherit",
    display: "flex",
    justifyContent: "space-between",
    cursor: "default",
    "&.MuiListItem-button": {
      "&:hover": {
        backgroundColor:" #1C3663",
      },
    },
  },

  menuDivider: {
    margin: "0 30px",
  },

  dashboardSelectMenu: {
    "& .MuiPopover-paper": {
      minWidth: "380px",
      maxWidth: "fit-content",
      backgroundColor:" #1C3663",
      width: "376px",
      height: "390px",
      background: "#142A51",


   borderRadius: "12px",
       color:"white"
    },
  },

  externalLinkIcon: {
    borderLeft: "1px solid var(--color-gray-eighty-five)",
    padding: "10px 0px 10px 10px",
    color: "var(--color-primary)",
    cursor: "pointer",
  },

  checkedItem: {
    color:"white",
  },
}));

function Dropdown1() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selection, setSelection] = useState("");

  useEffect(() => {
    setSelection(Mock_Data[0].label);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    if (e.target.innerText !== selection && e.target.innerText !== "") {
      setSelection(e.target.innerText);
    }
    setSearchText("");
    setAnchorEl(null);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };



  return (
    
    <div>
      <Button
    
        type="button"
        className={classes.DropDownButton}
        onClick={handleMenuOpen}
      >
        <div className="image-box">
            {/* <span style={{borderRadius:"50%",backgroundColor:"#314363;",height:"2rem",width:"17rem",padding:"0.2rem",color:"white"}}>12</span> */}
                <img className="__image" src="../Images/man.jpg"  alt="Error"/>
                </div>
        {/* <img className="__image" src="../Images/emp1.jpg" alt="Error"/> */}
        {selection}
        <i className="fas fa-chevron-down" />
      </Button>
      {renderDashboardMenu()}
    </div>
  );

  function renderDashboardMenu() {
    const displayOptions = Mock_Data
      .map((item) => {
        if (item.label.toLowerCase().includes(searchText.toLowerCase())) {
          return item;
        }
        return item;
      })
      .filter((item) => item !== undefined);

    function renderOption(value) {
      if (selection === value) {
        return (
          <div className={classes.checkedItem}>
            
            {value}
          </div>
        );
      }
      return value;
    }

    return (
      <>
      <Menu
        anchorEl={anchorEl}
        keepMounted={true}
        open={!!anchorEl}
        onClose={handleClose}
        className={classes.dashboardSelectMenu}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 110, left: 303 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem
          className={classes.searchBarContainer}
          disableTouchRipple={true}
        >
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <i className="fas fa-search " />
            </div>
            <InputBase
           
              placeholder="Search Employee "
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleSearchChange}
              value={searchText}
              
            />
          </div>
        </MenuItem>
        <Divider />
        {displayOptions.map((item, index) => {
          return (
            <div  key={index}>
              <MenuItem  style={{display:"flex",justifyContent:"space-between"}} onClick={(e) => handleClose(e)}>
                <div className="image-box">
                <img className="__image" src={item.imgUrl} alt="Error"/>
                <div className="label">
                {renderOption(item.label)}
                </div>
                </div>
               
                <Form.Check aria-label="true"/>
              </MenuItem>
              <Divider className={classes.menuDivider} />
            </div>
          );
        })}
      </Menu>

      </>
    );
  }
}

export default Dropdown1;
