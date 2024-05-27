import logo from '../../Images/logo.png';
import './header.css';
function header(){
    return(
        <>
        <div className="header m-3 d-flex">
            <div className="header__logo">  
                <img src={logo} alt="weather wave Logo" />
            </div>
            <div className="title d-flex justify-content-center align-items-center"><h3>Weather Wave</h3></div>
        </div>
        </>
    )
}
export default header;