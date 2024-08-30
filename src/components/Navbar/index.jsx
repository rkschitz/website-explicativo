import './style.css';
import Logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/html" className="nav-link">HTML</a>
        </li>
        <li className="nav-item">
          <a href="/css" className="nav-link">CSS</a>
        </li>
        <li className="nav-item">
          <a href="/javascript" className="nav-link">JavaScript no Frontend</a>
        </li>
        <a href="/" className="nav-logo"><img src={Logo}/></a>
        <li className="nav-item">
          <a href="/react" className="nav-link">React</a>
        </li>
        <li className="nav-item">
          <a href="/node" className="nav-link">Node.js</a>
        </li>
        <li className="nav-item">
          <a href="/devops" className="nav-link">DevOps (GHPages e PM2/Docker)</a>
        </li>
      </ul>
      <ul className="nav-menu-mobile">
        <li className="nav-item-mobile">
          <a href="/" className="nav-link-mobile">HTML</a>
        </li>
        <li className="nav-item-mobile">
          <a href="/" className="nav-link-mobile">CSS</a>
        </li>
        <li className="nav-item-mobile">
          <a href="/" className="nav-link-mobile">JavaScript no Frontend</a>
        </li>
        <a href="/" className="nav-logo"><img src={Logo}/></a>
        <li className="nav-item-mobile">
          <a href="/" className="nav-link-mobile">React</a>
        </li>
        <li className="nav-item-mobile">
          <a href="/" className="nav-link-mobile">Node.js</a>
        </li>
        <li className="nav-item-mobile">
          <a href="/" className="nav-link-mobile">DevOps (GHPages e PM2/Docker)</a>
        </li>
      </ul>
    </nav>
  );
}