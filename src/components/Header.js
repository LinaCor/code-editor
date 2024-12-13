import './my-style.css';
import logo from '../img/console-svgrepo-com.svg'


export function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <a href='/'><img src={logo} alt="logo" /> <span>CODE REDACTOR</span></a>
      </div>
    </header>
  )
}