// import logo from './logo.svg';
import '../nav/Nav.css';


let txt = 'View CV'

const markup = (
<div className='navbar'>
  
<div className='logo'><div className='mera'>MA</div></div>
<div className='menu'>
  <li>Home</li>
  <li>About</li>
  <li>Project</li>
  <li>Contact</li>
  <li ><a href='#' className='viw btn'>{txt}</a></li>
</div>
</div>);







function Nav() {
  try {
    
    return markup;
    
  } catch (error) {
    console.log(error);
  
  }
 
}

export default Nav;
