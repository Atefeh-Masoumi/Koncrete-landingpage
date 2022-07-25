import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Container header_2">
      <div className="row">
        <div className="navbar">
          {/* logo */}
          <div class="">
            <div
              className="outer-logoarea"
              
            >
              <div class="logo header_2">
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
          <div className="middle-nav">
            <div>
              <span>خانه</span>
            </div>
            <div>
              <span>مستندات قالب</span>
            </div>
            <div>
              <span>خانه</span>
            </div>
            <div>
              <span>خانه</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
