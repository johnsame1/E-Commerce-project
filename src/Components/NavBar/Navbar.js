import img1 from '../../images/menu-button.png';
import img2 from '../../images/search.png';
import img3 from '../../images/globe.png';
import img4 from '../../images/user.png';
import img5 from '../../images/user (1).png';
import './navbar.css'
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav>
                <div className="navbar">
                    <div className="container_logo">
                        <span>egybusiness.ae</span>
                        <div className="container">
                            <div className="data">
                                <img src={img1} alt='menu' />
                                <select className="menudata">
                                    <option>Menus</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                </select>
                            </div>
                            <div className='line'></div>
                            <input type='text' placeholder='Search over 30 million product' />
                            <div className='line'></div>
                            <img src={img2} alt='search' />
                        </div>
                    </div>

                    <div className="container_login">
                        <div className="data">
                            <select className="menudata">
                                <option>Deliver to</option>
                                <option>Egypt</option>
                                <option>Egypt</option>
                            </select>
                            <img src={img3} alt='img' />
                        </div>

                        <div className="login">
                            <img src={img4} alt='user' />
                            <button>Log in</button>
                        </div>

                        <div className="signin">
                            <img src={img5} alt='user' />
                            <button>Sign Up</button>
                        </div>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </div>
                    <div className={`menu ${isOpen && "active"}`}>
                        <ul>
                            <li><div className="login">
                                <img src={img5} alt='user' />
                                <button>Log in</button>
                            </div></li>
                            <li><div className="signin">
                                <img src={img5} alt='user' />
                                <button>Sign Up</button>
                            </div></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>);
}

export default Navbar