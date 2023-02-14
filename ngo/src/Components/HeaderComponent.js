import logo from "../images/logo.png"
function Header() {
    
  
    let content = 
      <nav>
          
        <img src={ logo } alt="IMG NOT FOUND"/>

          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        
      </nav>;
  
    return content;
  }
  
  export default Header;