import { useState } from "react";
import "./Navbar.css";
import hambergermenu from "../../asset/Images/menu-hamburger-custom.svg";
import logo from '../../asset/Images/logolanding-1.png';
const Navbar = () => {
  const [showNav, setShownav] = useState(false);
  return (
    <div className="Container header_2">
      <div className="row">
        <div className="navbar">
          <div className="left-nav nav">
            <div className="inner-leftnav-div">
              <a className="inner-leftbuton">
                <span>خرید از مارکت ژاکت</span>
              </a>
            </div>
          </div>
          {/* center menu */}
          <div className="middle-nav">
            <img
              src={hambergermenu}
              className="hamberger-menu"
              onClick={() => setShownav(!showNav)}
            />
           
            <ul
              id="menu-header"
              className={
                "ceneter-nav-content " +
                "" +
                (showNav ? "ceneter-nav-content" : "none")
              }
            >
              <li className="cz">
                <a href="#">
                  <span className="nav-text hometext-nav">خانه</span>
                </a>
              </li>
              <li className="cz">
                <a href="#">
                  <span className="nav-text">مستندات قالب</span>
                </a>
              </li>
              <li className="cz">
                <a href="#">
                  <span className="nav-text">وب سایت اصلی</span>
                </a>
              </li>
              <li className="cz">
                <a href="#">
                  <span className="nav-text">پشتیبانی</span>
                </a>
              </li>
            </ul>
          </div>
          {/* logo */}
          <div className="right-nav nav">
            <div className="outer-logoarea">
              <div className="logo ">
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/landing/"
                  title="یک سایت دیگر با وردپرس فارسی"
                >
                  <img
                    src={logo}
                    data-src=""
                    alt="قالب Koncrete | قالب ساختمانی وردپرس کانکریت"
                    className="logo-img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
