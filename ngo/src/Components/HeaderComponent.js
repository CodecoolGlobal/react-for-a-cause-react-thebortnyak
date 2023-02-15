import logo from "../images/logo.png"
function Header() {
    
  
    let content = 
      <nav>
        <img src={ logo } alt="IMG NOT FOUND"/>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
      </nav>;
  
    return content;
  }
  
  export default Header;