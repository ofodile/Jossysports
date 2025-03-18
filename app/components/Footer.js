import Link from "next/link";
import "../css/Footer.css";


const Footer = () => {
  return (
      <footer className="footer">
       <div className="footer-content">
        <ul className="footer-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <p className="credit">&copy; 2025 Naijaleakhub. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer