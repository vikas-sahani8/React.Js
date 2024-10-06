/* eslint-disable react/prop-types */
import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";
import logo from '../../public/Images/logo.svg'
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        
        <div className='logo-container'><img src={logo} className='logo' alt="" /></div>
      
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;