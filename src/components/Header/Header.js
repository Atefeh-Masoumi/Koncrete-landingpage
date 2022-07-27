import './Header.css';
import crane from '../../asset/Images/crane.png';
import bgblack from '../../asset/Images/Black-Desktop-Wallpaper-4k-scaled-1.jpg';
import derrick from '../../asset/Images/car.png';
const Header = () => {
    return ( 
        <>
        <div className='header'>
            <div className='bg-img'>
                <img src={bgblack} className="header-image"/>
            </div>

        </div>
        </>
     );
}
 
export default Header;