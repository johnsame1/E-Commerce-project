import { Link } from 'react-router-dom';
import img1 from '../../../images/DropShiping.jpg';
import img2 from '../../../images/man-carries-cardboard-box.png';
import './sectionone.css'
function SectionOne() {
    return (
        <>
            <div className="sectionone">
                
                <img src={img1} alt='shopping' />
                <div className="container">
                    <div className="data">
                        <h1>Best Way to Dropship <br/>your products</h1>
                        <p>The leading e-commerce platform<br/>
                            specialized in drop shipping for global trade</p>
                        <Link to={'/filteration'} className='link'>Explore Now</Link>
                    </div>
                    <div className="image">
                        <img src={img2} alt='' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionOne;