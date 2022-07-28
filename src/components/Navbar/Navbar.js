import "./Navbar.css";
const Navbar = () => {
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
          <ul className="middle-nav ">
            <li >
              <span>خانه</span>
            </li>
            <li>
              <span>مستندات قالب</span>
            </li>
            <li>
              <span>وب سایت اصلی</span>
            </li>
            <li>
              <span>خانه</span>
            </li>
          </ul>
          {/* logo */}
          <div className="right-nav nav">
            <div
              className="outer-logoarea"
              
            >
              <div className="logo header_2">
                <a
                  href="https://danapeyvast.com/products/koncrete-wp-theme/landing/"
                  title="یک سایت دیگر با وردپرس فارسی"
                >
                  <img
                    src="https://danapeyvast.com/products/koncrete-wp-theme/landing/wp-content/uploads/2021/11/8080logolanding-1.png"
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
