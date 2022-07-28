import "./Header.css";
import crane from "../../asset/Images/crane.png";
import bgblack from "../../asset/Images/Black-Desktop-Wallpaper-4k-scaled-1.jpg";
import derrick from "../../asset/Images/car.png";
import darklogo from "../../asset/Images/logo-dark.png";
import {ReactComponent as Svgl} from '../Svg.svg';

const Header = () => {
    
  return (
    <>
      <div className="header">
        <div className="bg-img">
          <img src={bgblack} className="header-image" alt="header background" />
        </div>
        <div className="inner-header-img">
          <div className="contain">
            <div className="crane-container">
              <img src={crane} className="crane-img" alt="crane" />
            </div>
          </div>
          <div className="">
            <div className="header-box-transparent">
              <span className="header-text">
                شاهکارقالب های شرکتی،ساختمانی وردپرس
              </span>
            </div>
            <div className="bg-header-logo">
              <img src={darklogo} alt="logo" />
            </div>
            <div className="drrick-container">
              <img src={derrick} className="derrick-img" alt="derrick" />
            </div>
          </div>
        </div>
      </div>


      {/* bottom svg */}
      <div className="svg-container ">
      <Svgl className="svg"/>
      </div>
    </>
  );
};

export default Header;
