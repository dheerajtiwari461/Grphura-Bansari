import React from 'react'
import Button from 'react-bootstrap/Button';
import myProfile from "../../assets/salesExecutive/Dashboard/myProfile.png";
import myProfileArrow from "../../assets/salesExecutive/Dashboard/myProfileArrow.png";
import '../salesExecutive/header.css'

const Header = () => {
  return (
    <div id='header-btns'>
      <Button id='btn'>Proposals</Button>
      <Button id='btn'>Custom Plan</Button>
      <Button id='btn'>Work Order</Button>
      <Button id='img-btn'><img src={myProfile} alt="" />My Profile <img id='arrow' src={myProfileArrow} alt="" /></Button>
    </div>
  )
}

export default Header
