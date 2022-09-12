// import { Link } from 'react-router-dom';
import '../index.css';

const NavBar = () => {
    return ( 
            <div className="bg-transparent flex h-[30px] justify-between p-4 fixed top-0 transition-all duration-[0.5s] ease-in z-[1]">

            {/* <Link> */}
                <img
                    className="left-5 w-40 fixed object-contain"
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    alt=""
                />
            {/* </Link>
            <Link> */}
                <img
                    className="right-5 w-12 fixed object-contain"
                    src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"
                    alt=""
                />
            {/* </Link> */}
            
            </div>
     );
}
 
export default NavBar;